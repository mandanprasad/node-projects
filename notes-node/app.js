console.log("starting app");
var notes = require('./notes.js');
const yargs = require('yargs');

var displayNote = (note) => {
  console.log('-------------------');
  console.log(`Title: ${note.title}`);
  console.log(`body: ${note.body}`);
}

var argv = yargs.argv
var command = process.argv[2];
console.log("What's your command: ", command)
console.log("Process: ", process.argv);
console.log("Yargs: ", argv)

if(command === "add") {
  var note = notes.addNotes(argv.title, argv.body);
  if(note) {
   console.log("Notes is created");
   displayNote(note)

 } else {
   console.log("Notes is not created");
 }

}
else if(command === 'read') {
  var note = notes.getNote(argv.title)
  if(note) {
    console.log("Notes is found");
    displayNote(note)
  } else {
    console.log('note found');
  }

}

else if(command === "remove") {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note was removes' : 'Note not found'
  console.log(message);
}

else {
  console.log("Command does not recognize");
}
