const Engineer = require('../lib/Engineer');

test ('create engineer object', () => {
    const engineer = new Engineer ('Sonz', 111, 'sonz@fakeemail.com', 'github');

    expect(engineer.name).toBe('Sonz');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('sonz@fakeemail.com');
    expect(engineer.github).toBe('github');
});

test ("get engineer's github", () => {
    const engineer = new Engineer ('Sonz', 111, 'sonz@fakeemail.com', 'github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('github'))
});

test('get engineer role', () => {
    const engineer = new Engineer ('Sonz', 111, 'sonz@fakeemail.com');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});