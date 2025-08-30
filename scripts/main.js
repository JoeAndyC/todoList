const addTask = document.querySelector('#addTask');
const taskDiv = document.querySelector('#taskDiv');
const enterTask = document.querySelector('#enterTask');

addTask.addEventListener('click', () => {
  let inputTask = document.createElement('input');
  let labelInput = document.createElement('label');
  let checkInput = document.createElement('input');

  //* Input to mark when the task it is done
  inputTask.type = 'radio';
  inputTask.class = 'task';
  inputTask.name = 'valueTask';
  
  labelInput.textContent = enterTask.value;
  labelInput.name = 'valueTask';

  //* Input to mark the task we want to delete
  checkInput.type = 'checkbox';
  checkInput.class = 'checkDelete';
  checkInput.name = 'deleteChecking';  
  
  //enterTask.textContent = '';
  //enterTask.placeholder = 'Ingrese su tarea...';  
    
  taskDiv.appendChild(inputTask);
  taskDiv.appendChild(labelInput);
  taskDiv.appendChild(checkInput);  
});
