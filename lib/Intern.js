const Employee = require("./Employee");

// class Employee extends Index {
class Intern extends Employee{
    constructor(name = 'Jaime',id = 1,email="jaime@email.com", role = "Employee", school = "") {
        super(name,id,email,role);
        this.school = school;
        this.role = 'Intern';
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Intern;