const file = require("fs"); //to use file system module
var students = [];
var programs = [];

exports.initialize = () => {
  return new Promise((resolve, reject) => {
    file.readFile("./data/students.json", (err, data) => {
      if (err) {
        reject("unable to read file");
      } else {
        students = JSON.parse(data);
      }
    });

    file.readFile("./data/programs.json", (err, data) => {
      if (err) {
        reject("unable to read file");
      } else {
        programs = JSON.parse(data);
      }
    });
    resolve();
  });
};

exports.getAllstudents = () => {
  return new Promise((resolve, reject) => {
    if (students.length == 0) {
      reject("no results returned");
    } else {
      resolve(students);
    }
  });
};

exports.getIntlstudents = () => {
  return new Promise((resolve, reject) => {
    var intlstudents = students.filter(
      (employee) => employee.isintlstudents == true
    );
    if (intlstudents.length == 0) {
      reject("no results returned");
    }
    resolve(intlstudents);
  });
};

exports.getprograms = () => {
  return new Promise((resolve, reject) => {
    if (programs.length == 0) {
      reject("no results returned");
    } else {
      resolve(programs);
    }
  });
};
