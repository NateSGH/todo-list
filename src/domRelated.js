import { format } from "date-fns";
import parseISO from "date-fns/parseISO";

// DOM module (module pattern)
const dom = (() => {
  const pageContent = document.querySelector(".main-content");
  let funcOnClick = "";

  // create todo
  function addTodoToPage(object) {
    const todo = document.createElement("div");
    todo.classList.add("todo-content");
    todo.dataset.id = object.getIdNum();

    const checkbox = document.createElement("i");
    checkbox.classList.add("far");
    if (object.getCompletion() === false) {
      checkbox.classList.add("fa-square");
    } else {
      checkbox.classList.add("fa-check-square");
    }
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

    checkbox.addEventListener("click", (event) => {
      toggleTaskCompletion(checkbox, title);
      console.log(event.target.parentNode.dataset.id);
      funcOnClick(Number(event.target.parentNode.dataset.id));
    });
  }
  //todoComletitionHandler
  function toggleTaskCompletion(checkboxEl, titleEl) {
    // const checkbox = document.querySelector("checkbox");
    checkboxEl.classList.toggle("fa-square");
    checkboxEl.classList.toggle("fa-check-square");

    if (checkboxEl.classList.contains("fa-check-square")) {
      titleEl.style.textDecoration = "line-through";
    } else {
      titleEl.style.textDecoration = "none";
    }
  }

  function addTaskCompletionListener(functionOnClick) {
    funcOnClick = functionOnClick;
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

  function createAddTodoForm(params) {
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    formContainer.innerHTML = `
    <div class="form-wrapper">
      <button id="close-form"><i class="fas fa-times"></i></button>
      <h3>Add New Task</h3>
      <form id="add-task-form">
        <div class="form-control form-title">
          <label for="title">Title</label>
          <input type="text" name="title" id="title"
              placeholder="Enter todo title" required>
        </div>

        <div class="form-control form-description">
          <label for="description">Description</label>
          <textarea name="description" id="description" rows="5" 
            placeholder="Enter todo description" required></textarea>
        </div>

        <div class="form-control form-due-date">
          <label for="due-date">Due Date</label>
          <input type="date" name="duedate" id="due-date"
              placeholder="Enter the title" required>
        </div>

        <div class="form-control form-priority">
          <label for="priority">Priority</label>
          <select name="priority" id="priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
          </select>
        </div>

        <div class="form-control form-project">
          <label for="project">Project</label>
          <select name="project" id="project">
              <option value="inbox">Inbox</option>
          </select>
        </div>

          <input type="submit" value="Submit" id="form-submit">
      </form>
    </div>`;
    formContainer.style.animation = "fade-in 0.5s";
    document.querySelector("body").appendChild(formContainer);
  }

  function formHandler(todoFormHandler, todoArr) {
    const addTaskBtn = document.getElementById("add-task");
    addTaskBtn.addEventListener("click", () => {
      if (!document.getElementById("add-task-form")) {
        dom.createAddTodoForm();
        closeFormHandler();
        submitFormHandler(todoFormHandler);
      }
    });

    function closeFormHandler() {
      const closeFormBtn = document.getElementById("close-form");
      closeFormBtn.addEventListener("click", () => {
        removeForm();
      });
    }

    function submitFormHandler(todoFormHandler) {
      const newTodoForm = document.getElementById("add-task-form");

      newTodoForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const todoObj = {
          title: newTodoForm.elements.title.value,
          description: newTodoForm.elements.description.value,
          dueDate: format(
            parseISO(newTodoForm.elements.duedate.value),
            "dd-MM-yyyy"
          ),
          priority: newTodoForm.elements.priority.value,
          project: newTodoForm.elements.project.value,
        };

        if (todoFormHandler(todoObj, todoArr)) {
          removeForm();
          addTodoToPage(todoArr[todoArr.length - 1]);
        }
      });
    }
  }

  function removeForm() {
    const formContainer = document.querySelector(".form-container");
    formContainer.style.animation = "fade-out 0.5s";
    setTimeout(() => formContainer.remove(), 450);
  }

  window.addEventListener("click", (event) => {
    if (event.target == document.querySelector(".form-container")) {
      removeForm();
    }
  });

  return {
    addTodoToPage,
    setPriorityOnPage,
    createAddTodoForm,
    formHandler,
    addTaskCompletionListener,
  };
})();

export { dom };
