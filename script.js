let button = document.getElementById("taskButton");
let taskLister = document.getElementById('taskLister');
button.addEventListener('click', () => taskList());

function taskList() {
  let item = document.getElementById("taskInput").value;
  let newTask = document.createElement("li");
  newTask.setAttribute("ID", "newTask");
  let deleteTaskButton = document.createElement("button");
  deleteTaskButton.setAttribute("id", "deleteTaskButton");
  deleteTaskButton.textContent = "Delete";
  newTask.innerText = item;
 
  if(item == '') {
    alert('Enter a task');
    return false;
  } else {
     taskLister.appendChild(newTask);
     newTask.appendChild(deleteTaskButton);
  }

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


