const Employee = require("./Employee");

// class Employee extends Index {
class Engineer extends Employee{
    constructor(github = 'jaimehub') {
        super();
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;