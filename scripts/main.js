// Traer elementos del html
const newTask = document.querySelector('.newTask');
const addTaskButton =  document.querySelector('buttonAddTask');
const taskList = document.querySelector('.taskList');

const task = [];

while(true) {
  try {
    if (newTask.value !== '' || newTask.value !== undefined || newTask.value !== null) {
      addTaskButton.addEventListener('clicl', => {
        const task = document.createElement('div');
        const radioModInput = document.createElement('div');
        const pTask = document.createElement('p');
        const deleteButton = document.createElement('button');
        
        // Enter the class for each element
        task.className = 'task';
        radioModInput.className = 'radioModInput';
        pTask.className = 'task';
        deleteButton.className =  'deleteButton';

        // Enter the task in the array
      });  
    }
  }
}