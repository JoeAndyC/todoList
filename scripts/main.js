// Traer elementos del html
const newTask = document.querySelector('input');
const addTaskButton =  document.querySelector('.buttonAddTask');
const taskList = document.querySelector('.taskList');
const errorMessage = document.querySelector('.errorMessage');
const tasks = [];

let taskValue;
addTaskButton.addEventListener('click', () => {
  if(newTask.value == '') {
    errorMessage.textContent = 'Debes ingresar una tarea, no puedes ingresar un dato vacío!';
    return;
  }
  taskValue = newTask.value;
  
  const task = document.createElement('div');
  const radioModInput = document.createElement('div');
  const taskText = document.createElement('p');
  const deletTask = document.createElement('button');
  
  task.className = 'task';
  radioModInput.className = 'radioModInput';
  taskText.className = 'taskText';
  deletTask.className = 'deletTask';
  
  taskText.innerText = taskValue;
  tasks.push(taskValue);
  deletTask.textContent = 'Borrar';
  taskList.appendChild(task);
  task.appendChild(radioModInput);
  task.appendChild(taskText);
  task.appendChild(deletTask);
  
  newTask.value = '';
});

// Calling the radioModInput's to make a change when they are selected
const radioModInput = document.querySelector('radioModInput');









