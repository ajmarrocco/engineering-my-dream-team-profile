// const Index = require('index');

// class Employee extends Index {
class Employee {
    constructor(name = 'Jaime') {
        // super();
        this.name = name;
        this.id = 2;
        this.email = 'jaime@email.com';
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;
