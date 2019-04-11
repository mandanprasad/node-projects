// var obj = {
//   name: 'Mandan'
// }
//
// var stringObj = JSON.stringify(obj)
//
// console.log(typeof stringObj);
//
//
// var myDetail = '{"name":"Mandan", "age":18}'
// console.log(myDetail);
//
// var person = JSON.parse(myDetail)
// console.log(person.name);


const fs = require('fs');

var originalNote = {
  title: 'some title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString);

var note = JSON.parse(originalNoteString)
console.log(typeof note);
console.log(note.title);
