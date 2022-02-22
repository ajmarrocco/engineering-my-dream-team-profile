const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Jaime','1',"jaime@email.com","Employee");

    expect(employee.name).toBe('Jaime');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
});

test('gets the employee name', () => {
    const employee = new Employee('Jaime');

    expect(employee.getName()).toBe('Jaime');
})

test('gets the employee id', () => {
    const employee = new Employee('Jaime');

    expect(employee.getId()).toEqual(expect.any(String));
})

test('gets the employee email', () => {
    const employee = new Employee('Jaime');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('returns the employee as string', () => {
    const employee = new Employee('Jaime');

    expect(employee.getRole()).toEqual(expect.any(String));
})