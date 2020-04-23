// Selectors 

const todoInput = document.querySelector('todo-input');
const todoButton = document.querySelector('todo-button');
const todoList = document.querySelector('todo-list');
const filterOption = document.querySelector('filter-todo');

// Event Listeners

document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


// Functions 

function addTodo(event) {
    // prevent form from submitting
    event.preventDefault();
    //todo div
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   // create LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   // add todo to local storage
   saveLocal
    // check mark button
    const completedButton = document.createElement('button';
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    todoDiv.appendChild(completedButton); 
    // check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append to list
    todoList.appendChild(todoDiv);

    // clear to do input value
    todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  // delete todo
  if(item.classList[0] === "trash-btn") { 
      const todo = item.parentElement;
      //animation
      todo.classList.add("fall");
      removeLocalTodos(todo);
      todo.addEventListener('transitionend', function(){
          todo.remove();
      })
     }

  // check mark
  if(item.classList[0] === "complete-btn"){
      todo.classList.toggle("completed");
  }
}

//filter todo
function filterTodo(e) {
    const todos - todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                                } else {
                                    todostyle.display = "none";
                                }
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                              } else {
                                  todostyle.display = "none";
                              }
                              break;
        }
    });
}

// save todos to local storage

function saveLocalTodos(todo) {
    // check for content
    let todos;
    if(localStorage.getItem("todos") === null {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
     if(localStorage.getItem("todos") === null {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
 //todo div
 const todoDiv = document.createElement("div");
 todoDiv.classList.add("todo");
 // create LI
 const newTodo = document.createElement('li');
 newTodo.innerText = todoInput.value;
 newTodo.classList.add('todo-item');
 todoDiv.appendChild(newTodo);

  // check mark button
  const completedButton = document.createElement('button';
  completedButton.innerHTML = '<i class="fas fa-check"></i>'
  todoDiv.appendChild(completedButton); 
  // check trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // append to list
  todoList.appendChild(todoDiv);

});
}

function removeLocalTodos(todo) {
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
        console.log(todo.children[0].innerText);
        console.log(todos.indexOf("apple"));
    todos.splice(toods.indexOf(todoIndex), 1);
  }