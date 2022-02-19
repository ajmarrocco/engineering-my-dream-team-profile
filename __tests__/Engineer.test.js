const Engineer = require('../lib/Engineer.js');

test('returns the github account', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('returns the Engineer as string', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual(expect.any(String));
})