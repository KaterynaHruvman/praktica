class User {
    constructor({ login, email, password, status }) {
        this.login = login;
        this.emeil = emeil;
        this.password = password;
        this.status = status;
    }
    showLogin(login) {
        console.log(login)
     }
}

const bob = new User({
    login: 'bob',
    emeil: 'bob@MediaList.com',
    password: 'jjkjkjkjkjkj',
    status: 'visitor',
});
console.log(bob)
console.log(bob.login)