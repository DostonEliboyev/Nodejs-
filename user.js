const user = {
    name: "John",
    age: 20,
    email: "john@example.com"
}

const userLogger = (user) => {
    console.log(`User name is ${user.name} and email is ${user.email}`);
}

module.exports = {user,userLogger}


