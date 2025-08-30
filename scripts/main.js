const addTask = document.querySelector('#addTask');
const taskDiv = document.querySelector('#taskDiv');
const enterTask = document.querySelector('#enterTask');

addTask.addEventListener('click', () => {
  let inputTask = document.createElement('input');
  let labelInput = document.createElement('label');
  
  inputTask.type = 'radio';
  inputTask.class = 'task';
  inputTask.name = 'valueTask';
  
  labelInput.textContent = enterTask.value;
  labelInput.name = 'valueTask';
  
  let btnDelete = document.createElement('button');
  btnDelete.class = 'delete';
  btnDelete.textContent = 'Borrar';
  
 //TODO Button function. Think how work with the input
  
  enterTask.textContent = '';
  enterTask.placeholder = 'Ingrese su tarea'; 
  
  taskDiv.appendChild(inputTask);
  taskDiv.appendChild(labelInput);
  taskDiv.appendChild(btnDelete);
  
  
});