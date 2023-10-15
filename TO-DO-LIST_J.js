//Java script to store new tasks
const task=[];

//Function to add new tasks
function addTask()
{
    const taskInput= document.getElementById("taskinput").value;
    
    if(taskInput===""){
    alert("Please Enter a task");
    return;

}
//Convert  the task to  tasks array
task.push(taskInput);
}

//Update DOM
updateTaskList();

//clear input
document.getElementById("taskinput").value="";

//function Remove Task
function removetask(index){
    //remove the task from the tasks array
    task.splice(index,1);

    updateTaskList();
}

function clearall()
{
    task.length=0;

    updateTaskList();
}

// Function to update the task list in the DOM
function updateTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  
    for (let i = 0; i < task.length; i++) {
      const listItem = document.createElement("li");
      const taskText = document.createTextNode(task[i]);
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove-button";
      removeButton.onclick = function() {
        removetask(i);
      };
      listItem.appendChild(taskText);
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
    }
  }
  


