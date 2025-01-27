const InputTask = document.getElementById('InputTask');
const taskBtn = document.getElementById('taskBtn');
const myTaskList = document.getElementById('myTaskList');

// Load tasks from Local Storage when the page loads
document.addEventListener('DOMContentLoaded',getData);

//creating function to add to-Dos
function myTasks(){

   if(InputTask.value === ''){
    alert('Please Enter your Task First')
   }  
      else {
        //adding task here by creating list

        handleAddOrEditTask(InputTask.value);
        InputTask.value = '';
      }
   }
   

          function handleAddOrEditTask(task){
            let li = document.createElement('li');
            li.className = 'todos';
    
            let p = document.createElement('p');
    
            p.textContent = task;
    
            myTaskList.appendChild(li);
           //p is the first child element of li
            li.appendChild(p);
    
            // create Delete  Buttons inside li ;
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.id = 'deleteBtn';
            li.appendChild(deleteBtn);
    
            // create  Edit Buttons inside li ;
            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.id = 'editBtn';
            li.appendChild(editBtn);

             // create complete  Buttons inside li ;
             let completeBtn = document.createElement('button');
             completeBtn.textContent = 'completed';
             completeBtn.id = 'completeBtn';
             li.appendChild(completeBtn);
            storeData();

            //adding EventListener to complete Button
            completeBtn.addEventListener('click',function(){
               li.remove();
               storeData();
            })
    
    
            //adding eventListeners to buttons
    
            deleteBtn.addEventListener('click',(e) => {
                li.remove();
                storeData();
             })
    
    
             //adding eventListener to edit Button;
    
             editBtn.addEventListener('click',(e) => {
    
            //     let taskText = e.target.parentElement.firstElementChild.textContent;
            //     let newText = prompt('Change Task ', taskText);
            //     if(newText === ''){
            //         alert('you didnt changed the Task');
            //     } else{
            //         e.target.parentElement.firstElementChild.textContent = newText;
            //    }
    
            InputTask.value = e.target.parentElement.firstChild.textContent;
            li.remove();
            InputTask.focus()
            taskBtn.value = 'Edit Task';
            storeData()
            
    
                // Adding EventListener to task Button;
                taskBtn.addEventListener('click',(e) => {
                       taskBtn.value = 'Add Task';
                       e.target.parentElement.firstChild.textContent = InputTask.value;
                       storeData();
                })
                    
          })
          

          storeData();

     }
  

   function storeData(){
      let tasks = [];
       document.querySelectorAll('#myTaskList li p').forEach((p) => {
         tasks.push(p.textContent);
         
       })
       
       localStorage.setItem('data', JSON.stringify(tasks));
   }


  function getData(){
      let storedtasks = JSON.parse(localStorage.getItem('data'));
      console.log(storedtasks);
      storedtasks.forEach((taskItem) => {
         
         //calling the function again to display todos
         handleAddOrEditTask(taskItem);
         
          
      })

    } 

 
