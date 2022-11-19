const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = document.querySelector("header i");
const titleTag = document.querySelector("input");
const descTag = document.querySelector("textarea");
const addBtn = popupBox.querySelector("button");
const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const notes = JSON.parse(localStorage.getItem("notes") || []);



addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});



closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});

function showNotes() 
{
    notes.forEach((note) => {
        let liTag = '<li class="note"><div class="details"><p>This is a Title</p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur, minima officia autemnihil quam velit illum harum maxime quas ducimus omnis excepturi eveniet ipsum. Quas vero cumlaboriosam sapiente!</span></div ><div class="bottom-content"><span>November 19,2022</span><div class="settings"><i class="uil uil-ellipsis-h"></i><ul class="menu"><li><i class="uil uil-pen"></i>Edit</li><li><i class="uil uil-trash"></i>Delete</li></ul></div></div ></li >';
        addBox.insertAdjacentHTML("afterend", liTag);
    });

}

showNotes();

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

        notes.push(noteInfo);
        localStorage.setItem("notes", JSON.stringify(notes));
        closeIcon.click();
    }
});