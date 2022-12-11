const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const popUpTitle = popupBox.querySelector("header p");
const closeIcon = popupBox.querySelector("header i");
const titleTag = popupBox.querySelector("input");
const descTag = popupBox.querySelector("textarea");
const addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const notes = [];
let isUpdated = false, updateId;

addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});



closeIcon.addEventListener("click", () => {
    isUpdated = false;
    titleTag.value = "";
    descTag.value = "";
    addBtn.innerText = "Add a note";
    popUpTitle.innerText = "Add a note";
    popupBox.classList.remove("show");
});

function showNotes() {
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note, index) => {

        let liTag = `<li class="note">
                        <div class="details">
                        <p>${note.title}</p>
                            <span>${note.description}</span></div >
                            <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="settings">
                            <i onclick=(showMenu(this)) class="uil uil-ellipsis-h"></i>
                            <ul class="menu">
                            <li onclick="updateNote(${index}, '${note.title}', '${note.description}')"><i class="uil uil-pen"></i>Edit</li>
                            <li onclick="deleteNote(${index})"><i class="uil uil-trash"></i>Delete</li></ul>
                            </div>
                            </div>
                            </lid>`;
        addBox.insertAdjacentHTML("afterend", liTag);
    });

}

showNotes();

function showMenu(elem) {
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e =>
    {
        if(e.target.tagName != "I" || e.target != elem)
        {
            elem.parentElement.classList.remove("show");
        }
    })
}


function deleteNote(noteId)
{
    let confirmDel = confirm("Are you sure you want to delete this note?");
    if (!confirmDel) return;
    notes.splice(noteId,1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}


function updateNote(noteId, title, desc) {
    isUpdated = true;
    updateId = noteId;
    addBox.click();
    titleTag.value = title;
    descTag.value = desc;
    addBtn.innerText = "Update Note";
    popUpTitle.innerHTML = "Update a note";

}


addBtn.addEventListener("click", e => {
    e.preventDefault();
    let noteTitle = titleTag.value;
    let noteDescription = descTag.value;
    if (noteTitle || noteDescription) {
        let dateObj = new Date();
        let month = months[dateObj.getMonth()];
        let day = dateObj.getDay();
        let year = dateObj.getFullYear();
        let noteInfo = {
            title: noteTitle,
            description: noteDescription,
            date: `${month}, ${day}, ${year}`
        }

        if(!isUpdated)
        {
            notes.push(noteInfo);
        }
        else{
            isUpdated = false;
            notes[updateId] = noteInfo;
        }
        localStorage.setItem("notes", JSON.stringify(notes));
        closeIcon.click();
        showNotes();
    }
});