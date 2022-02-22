const Employee = require("./Employee");

// class Employee extends Index {
class Manager extends Employee{
    constructor(name = 'Jaime',id = '1',email="jaime@email.com", role = "Employee",number='9') {
        super(name,id,email,role);
        this.number = number;
        this.role = 'Manager';
    }
    officeNumber(){
        return this.number;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Manager;