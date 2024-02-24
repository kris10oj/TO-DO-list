// Function to handle the task creation, deletion, and completion
document.querySelector('#push').onclick = function () {
    // Get the input value
    const newTaskInput = document.querySelector('#newtask input');
    const taskName = newTaskInput.value.trim(); // Trim whitespace from the input

    // Check if the input is not empty
    if (taskName.length === 0) {
        alert("Please Enter A Task!");
    } else {
        // Create a new task element
        const newTaskElement = document.createElement('div');
        newTaskElement.classList.add('task');

        // Set the task content with the input value
        newTaskElement.innerHTML = `
            <span id="taskname">${taskName}</span>
            <button class="delete">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;

        // Attach event listener to delete button for the new task
        newTaskElement.querySelector('.delete').onclick = function () {
            newTaskElement.remove();
        };

        // Attach event listener to the new task for completion toggling
        newTaskElement.onclick = function () {
            newTaskElement.classList.toggle('completed');
        };

        // Append the new task to the tasks container
        document.querySelector('#tasks').appendChild(newTaskElement);

        // Clear the input field
        newTaskInput.value = "";
    }
};


// document.querySelector('#push').onclick = function(){
//     if (document.querySelector('#newtask input').value.length == 0){
//         alert("Please Enter A Task!")
//     }
//     else {
//         document.querySelector('#tasks').innerHTML += `
//         <div class = "task">
//         <span id="taskname">
//             ${document.querySelector('#newtask input ').value}
//         </span>        
//         <button class="delete" >
//             <i class="fa-regular fa-trash-can"></i>
//         </button>      
//         </div>  
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for (var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }

//         var tasks = document.querySelectorAll(".task");
//         for( var i=0; i<tasks.length; i++){
//             tasks [i].onclick = function(){
//                 this.classList.toggle('completed');
//             }
//         }
//         document.querySelector("#newtask input").value ="";

//     }
// } 