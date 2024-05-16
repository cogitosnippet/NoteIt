import { renderNotes } from "./app.js";

let arrayOfNotes = JSON.parse(localStorage.getItem("note"));
let showArchivedNotes = document.querySelector('.archive-notes-container');


showArchivedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isArchived})=> isArchived));

showArchivedNotes.addEventListener('click',(event)=>{
  let type = event.target.dataset.type;
  let noteId = event.target.dataset.id;

  switch (type){
    case "del":
      arrayOfNotes = arrayOfNotes.filter(({id}) => id!=noteId);
      showArchivedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isArchived})=> isArchived));
      localStorage.setItem("note",JSON.stringify(arrayOfNotes));
      break;
    case "archive":
      arrayOfNotes = arrayOfNotes.map((note)=> note.id==noteId ? {...note , isArchived: !note.isArchived}: note);
      showArchivedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isArchived})=> isArchived));
      localStorage.setItem("note",JSON.stringify(arrayOfNotes));
      break;
  }
})

