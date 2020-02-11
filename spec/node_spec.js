let Visitor = require('../src/node');

describe('function save()', function() {
  let lebo = new Visitor(
    'Lebo Mphago',
    25,
    12 / 12 / 12,
    1212,
    'Was wonderful',
    'Romeo'
  );

  it('exists', () => {
    expect(lebo.save).toBeDefined();
  });

  it("writes a visitor's content to a respectively named file", function() {
    fs = require('fs');

    lebo.save();

    fs.readFile('visitor_Lebo Mphago.json', 'utf8', function(err, info) {
      if (err) throw err;
      else {
        let readData = JSON.parse(info);
        expect(readData.fullName).toEqual('Le Mpgago');
        expect(readData.age).toEqual(25);
        expect(readData.date_visit).toEqual('12/12/12');
        expect(readData.time_visit).toEqual('1212');
        expect(readData.comments).toEqual('Was wonderful');
        expect(readData.Assistance).toEqual('Romeo');
      }
    });
  });
});
