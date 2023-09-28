const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    if(taskInput.value === ''){
        alert("You must write something!")
    }
    else{
        //Creates a list to store the input
        const li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        
        //to create cross mark
        const taskSpan = document.createElement("span");
        taskSpan.innerHTML = "\u274C";
        li.appendChild(taskSpan)
    }
  taskInput.value = '';
}    

//Events for checkbox and cross
taskList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//Save the tasks even after closing
function saveData(){
    localStorage.setItem("data", taskList.innerHTML)
}

//Shows saved data
function showTask(){
    taskList.innerHTML = localStorage.getItem("data")
}

