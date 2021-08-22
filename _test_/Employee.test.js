const { hasUncaughtExceptionCaptureCallback } = require('process');
const Employee = require('../lib/Employee');

test ('create employee object', () => {
    const employee = new Employee ('Sonz', 111, 'sonz@fakeemail.com');

    expect(employee.name).toBe('Sonz');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('sonz@fakeemail.com');
});

test ("gets employee's name", () => {
    const employee = new Employee ('Sonz', 111, 'sonz@fakeemail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Sonz'));
});

test('get employee id', () => {
    const employee = new Employee ('Sonz', 111, 'sonz@fakeemail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email', () => {
    const employee = new Employee ('Sonz', 111, 'sonz@fakeemail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('sonz@fakeemail.com'));
});

test('get employee role', () => {
    const employee = new Employee ('Sonz', 111, 'sonz@fakeemail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});