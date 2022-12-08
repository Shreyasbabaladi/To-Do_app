let todoList = [];
let indexEdit = 0;
let inputIteam = document.getElementById("inputIteam");
let addTaskButton = document.getElementById("add-Task-Button");
let listBox = document.getElementById("listBox");
let editTakeButton = document.getElementById("edit-Task-Button");

const displayTodo = () => {
  let htmlcode = "";
  todoList.forEach((task, index) => {
    htmlcode += `<li class=" w-full bg-Black-light p-3  rounded-2xl my-6 relative">
    <p>${task}</p>
    <button  onclick='edit(${index})' class="absolute right-[3%] -top-1/4 px-2 lg:px-3 py-1 rounded-xl bg-pink text-Black-dark font-bold"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button  onclick='deleteTodo(${index})' class=" absolute right-[14%] sm:right-[12%] md:right-[10%] lg:right-[10%] -top-1/4 px-2 lg:px-3 py-1 rounded-xl bg-pink text-Black-dark font-bold"><i class="fa-solid fa-trash"></i></button></li>`;
  });
  listBox.innerHTML = htmlcode;
};

const emptyChecker = (task) => {
  if (task.lenght == 0) {
    inputIteam.placeholder = "Please add todo";
    return false;
  }
  return task;
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

  if (inputIteam.value) {
    todoList.push(inputIteam.value);
    displayTodo();
    inputIteam.value = "";
    localStorage.setItem("todo", JSON.stringify(todoList));
  }
  inputIteam.placeholder = "Please add todo";
});

function edit(index) {
  indexEdit = index;
  addTaskButton.style.display = "none";
  editTakeButton.style.display = "inline";
  inputIteam.value = todoList[index];
}

editTakeButton.addEventListener("click", (e) => {
  e.preventDefault();
  todoList[indexEdit] = inputIteam.value;
  inputIteam.value = '';
  localStorage.setItem("todo", JSON.stringify(todoList));
  addTaskButton.style.display = "inline";
  editTakeButton.style.display = "none";
  displayTodo();
});

function deleteTodo(index) {
  todoList.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(todoList));
  displayTodo();
}
