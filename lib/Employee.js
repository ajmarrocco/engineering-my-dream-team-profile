// const Index = require('index');

// class Employee extends Index {
class Employee {
    constructor(name = 'Jaime',id='2',email='jaime@email.com',role='Employee') {
        // super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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
        return this.role;
    }
}

module.exports = Employee;
