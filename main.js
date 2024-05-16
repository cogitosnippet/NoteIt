import { renderNotes , uniqueId} from './app.js';

let title = document.querySelector('.title');
let note = document.querySelector('.note');
let addButton = document.querySelector('.add-btn');
let notesDisplay = document.querySelector('.notes-display');
let showOtherNotes = document.querySelector('.notes-container');
let showPinnedNotes = document.querySelector('.pinned-notes-container');


let arrayOfNotes = JSON.parse(localStorage.getItem("note")) || [];

notesDisplay.addEventListener('click',(event)=>{
    let type = event.target.dataset.type
    let noteId = event.target.dataset.id
     switch (type){
        case "del":
            arrayOfNotes = arrayOfNotes.filter(({id}) => id!=noteId);
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned,isArchived})=> !isPinned && !isArchived));
            showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned})=> isPinned));
            localStorage.setItem("note",JSON.stringify(arrayOfNotes));
            break;
        case "pinned":
            arrayOfNotes = arrayOfNotes.map((note => note.id===noteId ? {...note, isPinned: !note.isPinned} : note)) ;
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned,isArchived})=> !isPinned && !isArchived));
            showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned})=> isPinned));
            localStorage.setItem("note",JSON.stringify(arrayOfNotes));
            break;
        case "archive":
            console.log(type);
            arrayOfNotes = arrayOfNotes.map((note => note.id === noteId ? {...note, isArchived: !note.isArchived}: note));
            showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isArchived,isPinned})=> !isArchived && !isPinned));
            showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isArchived,isPinned})=> !isArchived && isPinned));
            localStorage.setItem("note",JSON.stringify(arrayOfNotes));
     }
})

addButton.addEventListener('click',()=>{
    if(title.value.trim().length>0 || note.value.trim().length>0){
        console.log(arrayOfNotes);
        arrayOfNotes = [...arrayOfNotes , {title: title.value.trim() , note: note.value.trim(), id: uniqueId(), isPinned: false, isArchived:false}]
        title.value = "";
        note.value = "";
        showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned,isArchived})=> !isPinned && !isArchived));
        localStorage.setItem("note",JSON.stringify(arrayOfNotes));
    }
})

showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned})=> isPinned));
showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned,isArchived})=> !isPinned && !isArchived)); 






