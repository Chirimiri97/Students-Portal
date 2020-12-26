const form = document.getElementById("task");
const list = document.getElementById("list");
const input = document.getElementById("task-input");
const clear = document.getElementById("clear");

// Listen To All Events. -> -> -> -> -> -> -> -> -> -> ->
loadAllEvents();

function loadAllEvents() {
  // DOM Load Event.
  document.addEventListener("DOMContentLoaded", getTasks);

  // Form Submit. And Add Task.
  form.addEventListener("submit", addTask);

  // Remove Task.
  list.addEventListener("click", removeTask);

  //Clear All Items.
  clear.addEventListener("click", clearTasks);
}

// Add Task Function. -> -> -> -> -> -> -> -> -> -> -> ->
function addTask(e) {
  e.preventDefault();

  // Get the Value inside the input.
  let input_value = input.value;
  // Check if input is not empty..
  if (input_value) {
    //Create a structure for list element.
    let li = `<li class="row"><span class="col-fill">--> ${input_value}</span><i class="fas fa-trash-alt col-2 delete"></i>
</li>`;

    // Append this everything to the list. -> -> -> -> -> -> -> -> -> -> -> -> -> ->
    // But appending will not work. So we have to use insertadjecentHtml on list.

    list.insertAdjacentHTML("beforeend", li);

    addToLocalStorage(input.value);
    input.value = "";
  }
}

// Remove Task Function. -> -> -> -> -> -> -> -> -> ->
// Remove a Task From The List. Right Now We dont have any trash buttons in the list itself.
// The List is empty. So we'll use event Delegation.
function removeTask(e) {
  if (e.target.classList.contains("delete")) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();

    // Remove from Local Storage.
    removeFromLocalStorage(e.target.parentElement);
  }
}

function clearTasks(e) {
  // Check if list has any items. And Remove them one by one.
  while (list.firstChild) {
    list.firstChild.remove();
  }

  localStorage.removeItem('tasks');
}

// Functions For Dealing With Local Storage. -> -> -> -> -> -> -> -> -> -> -> ->
// Add To LocalStorage.
function addToLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  // Push Changes To Local Storage...
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Getting The Tasks From Storage.
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  // Loop Over Tasks.
  for (let task of tasks) {
    let li = `<li class="row"><span class="col-fill">--> ${task}</span><i class="fas fa-trash-alt col-2 delete"></i>
    </li>`;
    list.insertAdjacentHTML("beforeend", li);
  }
}

// Remove Task From Local Storage.
function removeFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task, index) {
      if(taskItem.firstChild.textContent.slice(4) === task) {
          tasks.splice(index, 1);
      }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}