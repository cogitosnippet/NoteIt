
export const renderNotes = (arrayOfNotes) => {
  let newNote = arrayOfNotes.map((e) => {

    return `<div class="single-note relative shadow">
                    <div class="d-flex align-center title-container">
                        <span class="single-note-title">${e.title}</span>
                        <button class="button del-btn v-hidden" data-type="del" data-id = ${e.id}>
                            <span data-type="del" data-id = ${e.id} class="material-icons-outlined">delete</span>
                        </button>
                    </div>
                    <p>${e.note}</p>
                    <div class="options d-flex gap-md">
                        <button class="button btn pinned-btn v-hidden" data-type="pinned" data-id = ${e.id}>
                            <span class="material-icons-outlined" data-type="pinned" data-id = ${e.id}>push_pin</span>
                        </button>
                        <button class="button btn pinned-btn v-hidden" data-type="archive" data-id = ${e.id}>
                            <span data-type="archive" class="material-icons-outlined" data-id = ${e.id}>archive</span>
                        </button>
                    </div>
                </div>`;
  })
  newNote = newNote.join("");
  return newNote;
}


export const uniqueId = ()=>{
  let unique = Math.floor(Math.random()*10000);
  unique = unique.toString();
  return unique;
}


