let button = document.getElementById("taskButton");
button.addEventListener('click', () => taskList());

function taskList() {
  let item = document.getElementById("taskInput").value;
  let newTask = document.createElement("li");
  let deleteTaskButton = document.createElement("button");
  deleteTaskButton.textContent = "delete " + item;
  newTask.innerText = item;
  document.getElementById("taskLister").appendChild(newTask);
  newTask.appendChild(deleteTaskButton);

  if(markTaskComplete) {
    newTask.addEventListener('click', (e) => markTaskComplete(e));
    deleteTaskButton.addEventListener('click', (i) => removeTask(i));
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





