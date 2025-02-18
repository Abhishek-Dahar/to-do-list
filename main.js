const taskInput = document.getElementById("task-input");
const taskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add event Listener
taskBtn.addEventListener("click", addTask);
function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please Enter Your Task");
    return;
  }
  let taskItem = createElement(taskText);
  taskList.appendChild(taskItem);
  taskInput.value = "";
}
// Create a element (li) and appand to task list
function createElement(taskText) {
  let li = document.createElement("li");
  li.classList.add("task-item");
  li.textContent = taskText;
li.addEventListener("dblclick",()=>{
    li.remove(taskList)
})

  return li;
}

