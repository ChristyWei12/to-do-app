function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id = id + 1;
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('button');
      checkbox.type = "checkbox";
      deleteButton.type = "button";

      newLi.textContent = toDo.title;
      deleteButton.textContent = "delete";

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
      deleteButton.addEventListener('click', event => {
        toDos = toDos.filter(t => t.id != toDo.id);
        renderTheUI();
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  addToDoForm.addEventListener('reset', () => {
    while (toDoList.hasChildNodes()) {
      toDoList.removeChild(toDoList.firstChild);
    }
  });

  renderTheUI();
}


window.onload = function() {
  onReady();
};
