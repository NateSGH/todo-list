// DOM module (module pattern)
const dom = (() => {
  const pageContent = document.querySelector(".main-content");
  // create todo
  function addTodoToPage(object) {
    const todo = document.createElement("div");
    todo.classList.add("todo-content");

    const checkbox = document.createElement("i");
    checkbox.classList.add("far");
    checkbox.classList.add("fa-square");
    checkbox.classList.add("checkbox");
    checkbox.classList.add("todo-icon");

    const title = document.createElement("p");
    title.classList.add("todo-title");
    title.innerText = object.getTitle();

    const edit = document.createElement("i");
    edit.classList.add("fas");
    edit.classList.add("fa-pencil-alt");
    edit.classList.add("todo-icon");

    const priority = document.createElement("i");
    priority.classList.add("fas");
    priority.classList.add("fa-flag");
    priority.classList.add("todo-icon");

    setPriorityOnPage(object.getPriority(), priority);

    const deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fas");
    deleteBtn.classList.add("fa-trash-alt");
    deleteBtn.classList.add("todo-icon");

    todo.appendChild(checkbox);
    todo.appendChild(title);
    todo.appendChild(priority);
    todo.appendChild(edit);
    todo.appendChild(deleteBtn);
    pageContent.appendChild(todo);
  }

  // create project
  function addProjectToPage(object) {}

  // update main-content on section click
  // inbox

  //today

  // this week

  // projects

  // change priority
  function setPriorityOnPage(priority, iconEl) {
    switch (priority) {
      case "low":
        iconEl.style.color = "green";
        break;
      case "medium":
        iconEl.style.color = "orange";
        break;
      case "high":
        iconEl.style.color = "red";
        break;

      default:
        break;
    }
  }

  return {
    addTodoToPage,
    setPriorityOnPage,
  };
})();

export { dom };
