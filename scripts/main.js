const addTask = document.querySelector('#addTask');
const taskDiv = document.querySelector('#taskDiv');
const enterTask = document.querySelector('#enterTask');
const deleteBtn = document.querySelector('#delete');

addTask.addEventListener('click', () => {
  let task = document.createElement('div');
  let inputTask = document.createElement('input');
  let labelInput = document.createElement('label');
  let checkInput = document.createElement('input');

  task.class = 'taskDiv';


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
  
  enterTask.value = '';
  enterTask.placeholder = 'Ingrese su tarea...';  
    
  taskDiv.appendChild(task);

  task.appendChild(inputTask);
  task.appendChild(labelInput);
  task.appendChild(checkInput);

  deleteBtn.addEventListener('click', () => {
    if(checkInput.checked) {
      task.remove();
    }
  });

});
