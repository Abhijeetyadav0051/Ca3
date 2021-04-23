const fs = require('fs');

var allnotes = () => {
        var notes = fs.readFileSync('notes-data.json');
        if(notes){
            return JSON.parse(notes);
        }else{
            return [];
        }   
};


var add = (title, body) => {
    var notes = allnotes();
    var note = {
      title,
      body
    };
    var check = notes.filter((note) => note.title === title);
    if (check.length === 0) {
      notes.push(note);
      fs.writeFileSync('notes-data.json', JSON.stringify(notes));
      return note;
    }
};

module.exports = {
    add,
    allnotes,
};