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
  //! Don´t show the new tasks 
  const task = document.createElement('div');
  const radioModInputCreate = document.createElement('label');
  const radioInput = document.createElement = 'input';
  const taskText = document.createElement('p');
  const deletTask = document.createElement('button');
  const imgDelete = document.createElement('img');
  
  task.className = 'task';
  radioModInputCreate.className = 'radioModInput';
  //radioModInput.for = 'done-task';
  radioInput.className = 'radioInput';
  radioInput.type = 'radio';
 // radioInput.name = 'done-task';
  taskText.className = 'taskText';
  deletTask.className = 'deletTask';
  imgDelete.className = 'imagDelete';

  taskText.innerText = taskValue;
  tasks.push(taskValue);

  imgDelete.src = './src/eliminar.png';
  imgDelete.alt = 'Imagen de Tacho de Basura';

  taskList.appendChild(task);
  task.appendChild(radioModInputCreate);
  task.appendChild(radioInput);
  task.appendChild(taskText);
  task.appendChild(deletTask);
  deletTask.appendChild(imgDelete);
  
  newTask.value = '';
});

// Calling the radioModInput's to make a change when they are selected
const radioModInput = document.querySelectorAll('.radioModInput');

// Make the backgroundColor change color #1b93a1 || #f9f3d5
radioModInput.forEach((input) => {
  input.addEventListener('click', () => {
    if (input.style.backgroundColor !== '#1b93a1') {
      input.style.backgroundColor = '#1b93a1';
    }
  });
});

// Make a task change the text decoration
const tasksList = document.querySelectorAll('.taskText');

task.forEach((task) => {
  task.addEventListener('click', () => {
    task.style.textDecoration = 'line-through';
  });
});


