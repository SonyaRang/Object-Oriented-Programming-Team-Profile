const { hasUncaughtExceptionCaptureCallback } = require('process');
const Manager = require('../lib/Manager');

test ('create an Manager object', () => {
    const manager = new Manager ('Sonz', 111, 'sonz@fakeemail.com', 'officeC');

    expect(manager.name).toBe('Sonz');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('sonz@fakeemail.com');
    expect(manager.office).toBe('officeC');
});

test ('get managers office number', () => {
    const manager = new Manager ('Sonz', 111, 'sonz@fakeemail.com', 'officeC');

    expect(manager.getOffice()).toEqual(expect.stringContaining('officeC'))
});

test ('get managers role', () => {
    const manager = new Manager ('Sonz', 111, 'sonz@fakeemail.com', 'officeC');

    expect(manager.getRole()).toEqual(expect.stringContaining('manager'))
})