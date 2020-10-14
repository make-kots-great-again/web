"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userControllerFactory;

var _services = require("../services");

function userControllerFactory() {
  return Object.freeze({
    registerUser,
    getAllUsers,
    logInUser,
    deleteUser
  });

  async function registerUser(httpRequest) {
    try {
      const { ...userInfo
      } = httpRequest.body;
      const createdUser = await _services.userService.addUser({ ...userInfo
      });

      if (createdUser.message) {
        return {
          statusCode: 409,
          body: {
            success: false,
            ...createdUser
          }
        };
      }

      return {
        statusCode: 201,
        body: {
          success: true,
          message: "User has been created successfully",
          user: createdUser
        }
      };
    } catch (e) {
      console.log(e);
      return {
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  }

  async function logInUser(httpRequest) {
    try {
      const {
        pseudo,
        password
      } = httpRequest.body;
      const user = await _services.userService.logInUser({
        pseudo,
        password
      });

      if (user.message) {
        return {
          statusCode: 401,
          body: {
            success: false,
            ...user
          }
        };
      }

      const {
        username,
        email,
        userId: id
      } = user.data;
      return {
        statusCode: 200,
        body: {
          success: true,
          user: {
            userId: id,
            username: username,
            userEmail: email,
            token: user.token
          }
        }
      };
    } catch (e) {
      console.log(e);
      return {
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  }

  async function getAllUsers() {
    try {
      const users = await _services.userService.listUsers();
      return {
        statusCode: 200,
        body: [...users]
      };
    } catch (e) {
      console.log(e);
      return {
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  }

  async function deleteUser(httpRequest) {
    try {
      const deletedUser = await _services.userService.removeUser({
        id: httpRequest.params.userId
      });

      if (!deletedUser) {
        return {
          statusCode: 404,
          body: {
            message: "No valid entry found with provided id"
          }
        };
      }

      if (deletedUser.message) {
        return {
          statusCode: 404,
          body: {
            message: deletedUser.message
          }
        };
      }

      return {
        statusCode: 200,
        body: {
          message: "User deleted successfully !",
          removedUser: deletedUser
        }
      };
    } catch (e) {
      console.log(e);
      return {
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  }
}

;