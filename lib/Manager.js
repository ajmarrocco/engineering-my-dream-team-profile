const Employee = require("./Employee");

// class Employee extends Index {
class Manager extends Employee{
    constructor(number = 9) {
        super();
        this.number = number;
    }
    officeNumber(){
        return this.number;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;