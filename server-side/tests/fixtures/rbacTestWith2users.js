import {userService} from "../../services";
import {userRepository} from "../../repository";
import makeTwoUsers from "./make2users";

const usersRbac = async () => {

    const user1 = makeTwoUsers().user1;
    const user2 = makeTwoUsers().user2;

    const createdUser1 = await userService.addUser({...user1});
    const createdUser2 = await userService.addUser({...user2});

    await userRepository.patch({
        id: createdUser1.createdUser._id,
        isVerified: true
    });

    await userRepository.patch({
        id: createdUser2.createdUser._id,
        isVerified: true
    });

    const logInUser1 = await userService.logInUser(
        {"pseudo": user1.username, "password": user1.password});

    const logInUser2 = await userService.logInUser(
        {"pseudo": user2.username, "password": user2.password});

    const firstUserId = createdUser1.createdUser._id;
    const username1 = createdUser1.createdUser.username;

    return Object.freeze(
        {createdUser1, createdUser2, logInUser1, logInUser2, firstUserId, username1});

};

export default usersRbac;
