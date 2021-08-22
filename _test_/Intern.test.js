const Intern = require('../lib/Intern');

test ('create an Intern Object', () => {
    const intern = new Intern ('Sonz', 111, 'sonz@fakeemail.com', 'University of Texas');

    expect(intern.name).toBe('Sonz');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('sonz@fakeemail.com');
    expect(intern.school).toBe('University of Texas');
})

test ("get intern's school", () => {
    const intern = new Intern ('Sonz', 111, 'sonz@fakeemail.com', 'University of Texas');

    expect(intern.getSchool()).toEqual(expect.stringContaining('University of Texas'))
});

test ("get intern's role", () => {
    const intern = new Intern ('Sonz', 111, 'sonz@fakeemail.com', 'University of Texas');

    expect(intern.getRole()).toEqual(expect.stringContaining('intern'))
});