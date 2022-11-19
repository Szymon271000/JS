const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = document.querySelector("header i");
const titleTag = document.querySelector("input");
const descTag = document.querySelector("textarea");
const addBtn = popupBox.querySelector("button");
const months = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];

addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});


closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});

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
            date: month, day, year
        }

        const notes = [];
        notes.push(noteInfo);
        localStorage.setItem("notes", JSON.stringify(notes));
    }
});