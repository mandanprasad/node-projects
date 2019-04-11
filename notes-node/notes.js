console.log("Staring notes app")
const fs = require('fs')

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('nodes-data.json');
    return JSON.parse(notesString);
  } catch(err){
      return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('nodes-data.json', JSON.stringify(notes))

}

var addNotes = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title)
  if(duplicateNotes.length === 0) {
     notes.push(note);
     saveNotes(notes)
     console.log(`Hey mandan ${note}`);
     return note;
   }



};

var getAll = () => {
  console.log("Getting all notes");
  fetchNotes()
}

var getNote = (title) => {
  var notes = fetchNotes();
  var filterNotes = notes.filter(note => note.title === title);
  console.log(filterNotes);
  return filterNotes[0];
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title !== title);
  saveNotes(filterNotes)
   console.log(`Length of notes is ${notes.length} and length of filterNotes is ${filterNotes.length}`);
  return notes.length !== filterNotes.lengths;
}

module.exports = {
  addNotes,
  getAll,
  getNote,
  removeNote
}
