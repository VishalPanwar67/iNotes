console.log("Vishal It's is working");

// TO show all notes
showNotes();

// If user add note to local storage
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addnote = document.getElementById("addnote");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("addedNotesSection");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addnote.value,
  };
  notesobj.push(myObj);
  localStorage.setItem("addedNotesSection", JSON.stringify(notesobj));
  addnote.value = "";
  addTitle.value = "";
  // console.log(notesobj);
  showNotes();
});

// For Showing your Notes
function showNotes() {
  let notes = localStorage.getItem("addedNotesSection");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach((element, index) => {
    html += `<div id="addNotesSection">
            <div id="notes" class="allNotes">
              <h5>${element.title}</h5>
              <p name="notes" class ="addednotes"> ${element.text}</p>
              <button class="btn btn1" id="${index}" onclick= "deleteNote(this.id)">Delete Note</button>
            </div>
          </div>`;
  });
  let notesElm = document.getElementById("addedNotesSection");
  if (notesobj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// For delete Notes

function deleteNote(index) {
  // console.log("This function Delet", index);
  let notes = localStorage.getItem("addedNotesSection");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("addedNotesSection", JSON.stringify(notesobj));
  showNotes();
}

// Search Function

let searchText = document.getElementById("searchText");
searchText.addEventListener("input", () => {
  let inpVal = searchText.value;
  // console.log("this function input search", inpVal);
  let allNotes = document.getElementsByClassName("allNotes");
  Array.from(allNotes).forEach((element) => {
    let noteText = element.getElementsByTagName("p")[0].innerText;
    let titleText = element.getElementsByTagName("h5")[0].innerHTML;
    // console.log(noteText);
    if (noteText.includes(inpVal)) {
      element.style.display = "block";
    } else if (titleText.includes(inpVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
