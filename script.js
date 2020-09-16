let button = document.getElementById("taskButton");
button.addEventListener('click', () => taskList());
let item = document.getElementById("taskInput").value;

function taskList() {
  let item = document.getElementById("taskInput").value;
  let newTask = document.createElement("li");
  let deleteTaskButton = document.createElement("button");
  deleteTaskButton.textContent = "Delete";
  newTask.innerText = item;
  document.getElementById("taskLister").appendChild(newTask);
  newTask.appendChild(deleteTaskButton);
  

  if(markTaskComplete) {
    newTask.addEventListener('click', (e) => markTaskComplete(e));
    deleteTaskButton.addEventListener('click', (i) => removeTask(i));
  } 
  if(item == '') {
    alert('Enter a task');
    return false;
  }
}  
  

function markTaskComplete(e) {
  let strikeThrough = e.target;
  strikeThrough.style.textDecoration = "line-through";
}


function removeTask(i) {
  let deleteTask = i.target.parentElement;
  deleteTask.remove();
}


