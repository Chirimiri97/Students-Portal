const form = document.querySelector("#notes-form");
const table = document.getElementById("notes");
const tbody = document.querySelector("#table-body");
const topic = document.querySelector("#topic");
const description = document.querySelector("#description");
const clear = document.querySelector("#clear");

loadAllEvents();

function loadAllEvents() {
  //When Dom Loads.
  document.addEventListener("DOMContentLoaded", getNotes);

  // Call addNote.
  form.addEventListener("submit", addNote);

  // Call removeNote.
  tbody.addEventListener("click", removeNote);

  // Clear Button.
  clear.addEventListener("click", clearNotes);
}

// Function To Add A Note.
function addNote(e) {
  e.preventDefault();

  let topicValue = topic.value;
  let desValue = description.value;

  let Note = `<tr>
    <td>${topicValue}</td>
    <td>
      ${desValue}
    </td>
    <td><i class="fas fa-trash-alt delete"></i></td>
  </tr>`;

  let values = [topicValue, desValue];
  if (topic.value) {
    if (description.value) {
      tbody.insertAdjacentHTML("beforeend", Note);

      // To add Notes To Local Storage.
      addToLocalStorage(values);
      topic.value = "";
      description.value = "";
    }
  }
}

// Function To Remove A Note.
function removeNote(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
  // Remove from Local Storage.
  removeFromLocalStorage(e.target.parentElement.parentElement);
}

// Clear Everything.
function clearNotes(e) {
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  // Clear from Local Storage Also.
  localStorage.removeItem("notes");
}

// Local Storage Functions.
// Add To Local Storage.
function addToLocalStorage(val) {
  let notes;
  if (localStorage.getItem("notes") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("notes"));
  }
  notes.push(val);

  localStorage.setItem("notes", JSON.stringify(notes));
}

// Function To Get Notes When DOM Loads.
function getNotes() {
  let notes;
  if (localStorage.getItem("notes") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("notes"));
  }

  for (note of notes) {
    let Note = `<tr>
    <td>${note[0]}</td>
    <td>
      ${note[1]}
    </td>
    <td><i class="fas fa-trash-alt delete"></i></td>
  </tr>`;

    // Insert Notes To Table.
    tbody.insertAdjacentHTML("beforeend", Note);
  }
}

// Function to remove note from Local Storage.
function removeFromLocalStorage(noteItem) {
  let notes;
  if (localStorage.getItem("notes") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("notes"));
  }

  //  Loop through the Notes to find topic name. If it matches. Remove that table.
  for (let i = 0; i < notes.length; i++) {
    if (notes[i][0] === noteItem.firstElementChild.textContent) {
      notes.splice(i, 1);
    }
  }
  localStorage.setItem("notes", JSON.stringify(notes));
}
