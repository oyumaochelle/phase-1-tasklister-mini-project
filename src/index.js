document.addEventListener("DOMContentLoaded", () => {

    const createTaskForm = document.getElementById('create-task-form');
    createTaskForm.addEventListener('submit', function(e){
      e.preventDefault();
      const taskDescription = document.getElementById('new-task-description');
    });
    function createTaskItem(description){
      const tasklist = document.getElementById ('task-list');
      const li = document.createElement('li');
      li.textContent = description;
      //addition of the deletion button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function(){
        //removes the task item when the delete button is clicked
        li.remove();
      })
      li.append(deleteButton);
      tasklist.appendChild(li);
    }
    //modification of the form submit event listener to create a new task item
    createTaskForm.addEventListener('submit', function (e){
      e.preventDefault();
    })
  });

