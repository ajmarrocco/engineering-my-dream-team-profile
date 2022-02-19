const Intern = require('../lib/Intern.js');

test('returns the school name', () => {
    const intern = new Intern();

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('returns the intern as string', () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual(expect.any(String));
})