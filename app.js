//selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");


//Event listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);



//Functions
function addTodo(event) {

    //prevent form from submiting
    event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create -> li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // button -> checked
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    completeBtn.classList.add("complete-btn");
    todoDiv.appendChild(completeBtn);

    // button -> delete
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);


    //append to list
    todoList.appendChild(todoDiv);

    //clear todoinput value
    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;

    //Delete todo
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
    }


    // check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");

    }

}