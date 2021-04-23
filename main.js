const fs = require('fs');
const yargs = require('yargs');
const notes = require('./app.js');
const titleOptions = {
    describe: 'Title of note',
    demand: false,
    alias: 't'
  };
  const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  };
  const argv = yargs
    .command('add', 'Add a new note', {
      title: titleOptions,
      body: bodyOptions
    })
    .command('list', 'List all notes')
    .help()
    .argv;
  var command = argv._[0];

  if (command === 'add') {
    var note = notes.add(argv.title, argv.body);
    if (note) {
      console.log('Note created');
    } else {
      console.log('Change Title');
    }
  } 
  else if (command === 'list') {
    var allnotes = notes.allnotes();
    allnotes.forEach((note) => {
        console.log('Title - ',note.title );
        console.log('Body - ',note.body );
        console.log("---------------");
    });
  } 