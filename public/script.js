let todoList = [];
let index = 0;
let inputIteam = document.getElementById("inputIteam");
let addTaskButton = document.getElementById("add-Task-Button");
let listBox = document.getElementById("listBox");
let editTakeButton = document.getElementById("edit-Task-Button");

const displayTodo = () => {
  let htmlcode = "";
  todoList.forEach((task, index) => {
    htmlcode += `<li><p>${task}</p>
    <button onclick='edit(${index})'><i class="fa-solid fa-pen-to-square"></i></button>
    <button onclick='deleteTodo(${index})'><i class="fa-solid fa-trash"></i></button></li>`;
  });
  listBox.innerHTML = htmlcode;
};

if (!localStorage.getItem("todo")) {
  localStorage.setItem("todo", JSON.stringify(todoList));
} else {
  let todo = localStorage.getItem("todo");
  todoList = JSON.parse(todo);
  displayTodo();
}

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();

  todoList.push(inputIteam.value);
  displayTodo();
  inputIteam.value = "";

  localStorage.setItem("todo", JSON.stringify(todoList));
});

function edit(index) {
  save = index;
  addTaskButton.style.display = "none";
  editTakeButton.style.display = "block";
  inputIteam.value = todoList[index];
}

editTakeButton.addEventListener("click", (e) => {
  e.preventDefault();

  todoList[save] = inputIteam.value;
  addTaskButton.style.display = "block";
  editTakeButton.style.display = "none";

  displayTodo();
});

function deleteTodo(index) {
    todoList.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(todoList));
  displayTodo();
}
