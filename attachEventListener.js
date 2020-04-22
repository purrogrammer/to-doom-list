

// attach an event listener

button.addEventListener("click", function(e){
    e.preventDefault();
    // create element
    const newItem = document.createElement('li');

    // add a class
    newItem.classList.add("item");

    //adding the text
    newItem.innerText = nameInput.value;
    todoList.appendChild(newItem);
    todoNr.innerText = items.length;

    //delete the value from input
    nameInput.value = ""; 
    
    //create the element and attach listener
    newItem.addEventListener("click", deleteItem);

});

function deleteItem(e) {
    e.stopPropagation();
}