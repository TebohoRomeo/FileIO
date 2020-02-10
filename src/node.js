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

  async save() {
    // return this.fullname + this.age;
    fs.writeFile(
      'visitor_' + this.fullname + '.json',
      JSON.stringify(this, null, 4),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  }

  load() {
    fs.readFile(
      'visitor_' + this.fullname + '.json',
      'utf8',
      
      function(err, data) {
        if (err) {
          throw err;
        } else {
            console.log(data);
        }
      }
    );
  }
}

let lebo = new Visitor(
    'Le Mphago'
);
console.log(lebo.save());
console.log(lebo.load());
