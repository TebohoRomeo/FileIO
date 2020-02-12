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

  it('checks if save() is being defined', () => {
    expect(lebo.save).toBeDefined();
  });

  it("Checks if the informaton is being saved.", function() {
    fs = require('fs');

    lebo.save();

    fs.readFile('visitor_Lebo Mphago.json', 'utf8', function(err, info) {
      if (err) throw err;
      else {
        expect(lebo.fullName).toEqual('Le Mpgago');
        expect(lebo.age).toEqual(25);
        expect(lebo.date_visit).toEqual('12/12/12');
        expect(lebo.time_visit).toEqual('12:12');
        expect(lebo.comments).toEqual('Was wonderful');
        expect(lebo.Assistance).toEqual('Romeo');
      }
    });
  });
});
