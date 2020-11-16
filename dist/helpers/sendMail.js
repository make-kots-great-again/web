"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendMail;

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

var _sendMailTemplate = _interopRequireDefault(require("./sendMailTemplate"));

var _environment = _interopRequireDefault(require("../config/environment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendMail(key, username, groupName) {
  _mail.default.setApiKey(_environment.default.SENDGRID_API_KEY);

  const msg = {
    to: `toto@gmail.com`,
    from: 'he201718@students.ephec.be',
    subject: 'Group Invitation',
    html: _sendMailTemplate.default.replace("XXXusernameXXX", `${username}`).replace("XXXusernameXXX", `${username}`).replace("XXXgroupXXX", `${groupName}`).replace("link@link1", `https://kotsapp.herokuapp.com/group/invitation/${key}`).replace("link@link2", `https://kotsapp.herokuapp.com/group/invitation/${key}`).replace("link@link3", `https://kotsapp.herokuapp.com/group/invitation/${key}`)
  };

  (async () => {
    try {
      await _mail.default.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
}