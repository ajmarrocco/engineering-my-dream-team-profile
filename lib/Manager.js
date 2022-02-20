const Employee = require("./Employee");

// class Employee extends Index {
class Manager extends Employee{
    constructor(number = 9, role='Manager') {
        super();
        this.number = number;
        this.role = role;
    }
    officeNumber(){
        return this.number;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Manager;