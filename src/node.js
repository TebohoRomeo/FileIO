// Author: Teboho Romeo Lekhalo
'use strict';

const fs = require('fs');

class Visitor {
  constructor(fullname, age, date_visit, time_visit, comments, Assistance) {
    this.fullname = fullname;
    this.age = age;
    this.date_visit = date_visit;
    this.time_visit = time_visit;
    this.comments = comments;
    this.Assistance = Assistance;
  }

  save() {
    fs.writeFile(
      'visitor_' + this.fullname + '.json',
      JSON.stringify(this, null, 4),
      function(err) {
        if (err) {
          throw err;
        }
      }
    );
  }

  load() {
    fs.readFile('visitor_' + this.fullname + '.json', 'utf8', function(
      err,
      info
    ) {
      if (err) {
        throw err;
      } else {
        console.log(info);
      }
    });
  }
}

module.exports = Visitor;
