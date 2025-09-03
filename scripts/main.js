const addTask = document.querySelector('#addTask');
const taskDiv = document.querySelector('#taskDiv');
const enterTask = document.querySelector('#enterTask');
const deleteBtn = document.querySelector('#delete');
const alertMessage = document.querySelector('#alertMessage');



addTask.addEventListener('click', () => {
  let newTask= document.createElement('div');
  let task = document.createElement('input');
  let labelInput = document.createElement('label');
  let checkInput = document.createElement('input');

  newTask.id = 'divInputTask';


  //* Input to mark when the task it is done
  task.type = 'radio';
  task.class = 'taskInput';
  task.name = 'task';
  task.id = 'task';
  
  labelInput.textContent = enterTask.value;
  labelInput.name = 'valueTask';
  labelInput.for = 'task'

  //* Input to mark the task we want to delete
  checkInput.type = 'checkbox';
  checkInput.class = 'checkDelete';
  checkInput.name = 'deleteChecking';  
  
  enterTask.value = '';
  enterTask.placeholder = 'Ingrese su tarea...';  
  
    
  taskDiv.appendChild(newTask);

  newTask.appendChild(task);
  newTask.appendChild(labelInput);
  newTask.appendChild(checkInput);

  labelInput.addEventListener('click', () => {
    newTask.style.backgroundColor = 'green';
  })

  if(checkInput.checked) {
    newTask.style.backgroundColor = 'red';
  }
  deleteBtn.addEventListener('click', () => {
    if(checkInput.checked) {
      newTask.remove();
    }
  });

});
