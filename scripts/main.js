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

  //* Change the background of the newTask
  labelInput.addEventListener('click', () => {
    newTask.style.backgroundColor = '#a1c100';
    newTask.style.color = 'black';
    newTask.style.fontStyle = 'italic';
  })

  //* Input to mark the task we want to delete
  checkInput.type = 'checkbox';
  checkInput.class = 'checkDelete';
  checkInput.name = 'deleteChecking';  
  
  enterTask.value = '';
  enterTask.placeholder = 'Ingrese su tarea...'; 
  
  //* change the background when want to delete a task
  checkInput.addEventListener('click', () => {
    if(checkInput.checked) {
      newTask.style.backgroundColor = '#dd6438';
    } else {
      newTask.style.backgroundColor = '#a46385';
    }
  })

  
  //* Adding the task to the body   
  taskDiv.appendChild(newTask);

  newTask.appendChild(task);
  newTask.appendChild(labelInput);
  newTask.appendChild(checkInput);

  
  deleteBtn.addEventListener('click', () => {
    if(checkInput.checked) {
      newTask.remove();
    }
  });

});
