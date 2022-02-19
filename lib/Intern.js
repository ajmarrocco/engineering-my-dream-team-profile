const Employee = require("./Employee");

// class Employee extends Index {
class Intern extends Employee{
    constructor(school = "") {
        super();
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;