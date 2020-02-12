let Visitor = require('../src/node');

describe('function save()', function() {
  let lebo = new Visitor(
    'Lebo Mphago',
    25,
    '12/12/12',
    '12:12',
    'Was wonderful',
    'Romeo'
  );

  it('exists', () => {
    expect(lebo.save).toBeDefined();
  });

  it("writes a visitor's content to a respectively named file", function() {
    fs = require('fs');
    
    fs.readFile('visitor_Lebo Mphago.json', 'utf8', function() {
        expect(lebo.fullName).toBe('Le Mpgago');
        expect(lebo.age).toEqual(25);
        expect(lebo.date_visit).toBe('12/12/12');
        expect(lebo.time_visit).toEqual('12:12');
        expect(lebo.comments).toBe('Was wonderful');
        expect(lebo.Assistance).toBe('Romeo');
    });
  });
});
