// Author : Teboho Romeo Lekhalo

'use strict';

let Visitor = require('../src/node');

let fs = require('fs');

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

  it('checks if load() is being defined', () => {

    lebo.load()
    expect(lebo.load).toBeDefined();
  });

  it("Checks if the informaton is being saved.", () => {

    lebo.save();
    fs.readFile('visitor_Lebo Mphago.json', 'utf8', (err, info) => {
      if (err) throw err;
      else {
        expect({
          "fullname": "Lebo Mphago",
          "age": 25,
          "date_visit": "12/12/12",
          "time_visit": "12:12",
          "comments": "Was wonderful",
          "Assistance": "Romeo"
      }).toEqual(JSON.parse(info));
      }
    });
  });
});
