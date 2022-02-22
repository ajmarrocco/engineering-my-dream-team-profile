const Engineer = require('../lib/Engineer.js');

test('returns the school name', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('returns the intern as string', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual(expect.any(String));
})