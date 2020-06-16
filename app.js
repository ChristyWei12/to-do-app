function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDo = document.getElementById('deleteToDo');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    let newSpan = document.createElement('span');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    checkbox.className = "mdl-checkbox__input";

    // set the title
    newSpan.textContent = title;
    newSpan.className = "mdl-list__item-primary-content"
    newSpan.appendChild(checkbox);

    newLi.appendChild(newSpan);

    newLi.className = "mdl-list__item";

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });

  addToDoForm.addEventListener('reset', () => {
    while (toDoList.hasChildNodes()) {
      toDoList.removeChild(toDoList.firstChild);
    }
  });
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
