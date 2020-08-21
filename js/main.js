console.log("connected!!!");

const addNote = document.getElementById("addnote");
const noteBlock = document.getElementsByClassName("noteblock")[0];

function encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
};

function trimfield(str) {
    return str.replace(/^\s+|\s+$/g, '');
}


addNote.addEventListener("click", insertNote);

function insertNote() {
    let noteValue = encodeHTML(trimfield(document.getElementById("newmessage").value));
    // let noteValue = document.getElementById("newmessage").innerText;
    if (!noteValue == "") {
        let newNote = document.createElement("div");
        newNote.innerText = noteValue;
        newNote.classList.add("note");
        // newNote.classList.add("new-note");
        newNoteH = '<div class="note new-note">' + noteValue + '</div>';
        noteBlock.insertAdjacentHTML("afterbegin", newNoteH);
    }
}