

class User {

    constructor({ login, emeil, password, status }) {
        this._login = login;
        this.emeil = emeil;
        this.password = password;
        this.status = status;
    }
    showUsers() {
        console.log(this.users)
    }
    showLogin(login) {
        return this._login;
    }
    get login() {
        return this._login
    }
    addUser() {
        
    }
}

const bob = new User({
    login: 'bob',
    emeil: 'bob@MediaList.com',
    password: 'jjkjkjkjkjkj',
    status: 'visitor',
});
// console.log(bob)
// console.log(bob.showLogin())
console.log(bob.login)
console.log(bob.showUser)


class Admin extends User{
    constructor({masterPassword,  ...rest }) {
        super(rest);
        this.masterPassword = masterPassword;   
    }

}
const bobAdmin = new Admin(
    {
    login: 'bobAdmin',
    emeil: 'bob@MediaList.com',
    password: 'jjkjsdkjkjk',
    status: 'admin',
    masterPassword: 'sjkajskajsk'
})
    console.log(bobAdmin.login)