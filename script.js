
const currentTask = document.getElementById("newTask");
const addButton = document.getElementById("addButton");
const shoppingList = document.getElementById("shoppingList");

addButton.addEventListener("click", function() {
    const taskText = currentTask.value;
    const li = document.createElement("li");
    const taskLabel = document.createElement("label");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");
    
    taskLabel.textContent = taskText;
    taskLabel.className= "item";
    editButton.textContent= "edit";
    editButton.className = "listBox";
    removeButton.textContent = "remove";
    removeButton.className = "listBox";
    li.appendChild(taskLabel);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    shoppingList.appendChild(li);

    removeButton.addEventListener("click", function() {
        const selectedTask = this.parentNode;
        selectedTask.remove();
    });

    editButton.addEventListener("click", function() {
        const selectedTask = this.parentNode;
        let selectedItem = selectedTask.getElementsByClassName("item")[0].textContent;
 
        

        while (selectedTask.firstChild) {
            selectedTask.removeChild(selectedTask.lastChild);
        }

        const editInput = document.createElement("input");
        editInput.value = selectedItem;

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.className = "listBox";

        selectedTask.appendChild(editInput);
        selectedTask.appendChild(saveButton);

        saveButton.addEventListener("click", function(){

            while (selectedTask.firstChild) {
                selectedTask.removeChild(selectedTask.lastChild);
            }

            taskLabel.textContent = editInput.value;
            selectedTask.appendChild(taskLabel);
            selectedTask.appendChild(editButton);
            selectedTask.appendChild(removeButton);
        })
    });

    currentTask.value = "";
});