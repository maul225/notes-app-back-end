const { addNoteHandler, getAllNotesHandler } = require("./handler");

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
    },
    {
    method: 'GET',
    path: '/notes/{id}',
    handler: () => {},
    }
   ];
   
    
   module.exports = routes;