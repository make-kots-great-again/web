export default function makeTwoUsers() {
    const randomUser1 = Math.random().toString(36).substr(2, 9);
    const randomUser2 = Math.random().toString(36).substr(2, 9);

    const user1 = {
        "username": randomUser1,
        "email": `${randomUser1}@gmail.com`,
        "password": randomUser1
    };

    const user2 = {
        "username": randomUser2,
        "email": `${randomUser2}@gmail.com`,
        "password": randomUser2
    };

    return Object.freeze({user1, user2});
}
