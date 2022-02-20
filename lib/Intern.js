const Employee = require("./Employee");

// class Employee extends Index {
class Intern extends Employee{
    constructor(school = "",role='Intern') {
        super();
        this.school = school;
        this.role = role;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Intern;