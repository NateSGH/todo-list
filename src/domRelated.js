import { format } from "date-fns";
import parseISO from "date-fns/parseISO";

// DOM module (module pattern)
const dom = (() => {
  const pageContent = document.querySelector(".main-content");
  let todoTaskCompletionFuncOnClick = "";
  let todoGetTaskObjByIdFuncOnClick = "";
  let todoEditTaskObjByIdFuncOnClick = "";
  let todoDeleteTaskObjByIdFuncOnClick = "";
  let todoGetProjectsFunc = "";

  // create todo
  function addTodoToPage(obj) {
    const todo = document.createElement("div");
    todo.classList.add("todo-content");
    todo.dataset.id = obj.getIdNum();

    const checkbox = document.createElement("i");
    checkbox.classList.add("far");
    if (obj.getCompletion() === false) {
      checkbox.classList.add("fa-square");
    } else {
      checkbox.classList.add("fa-check-square");
    }
    checkbox.classList.add("checkbox");
    checkbox.classList.add("todo-icon");

    const title = document.createElement("p");
    title.classList.add("todo-title");
    title.innerText = obj.getTitle();

    const edit = document.createElement("i");
    edit.classList.add("fas");
    edit.classList.add("fa-pencil-alt");
    edit.classList.add("todo-icon");

    const priority = document.createElement("i");
    priority.classList.add("fas");
    priority.classList.add("fa-flag");
    priority.classList.add("todo-icon");

    setPriorityOnPage(obj.getPriority(), priority);

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
      todoTaskCompletionFuncOnClick(Number(event.target.parentNode.dataset.id));
    });

    title.addEventListener("click", (event) => {
      const todoObjById = todoGetTaskObjByIdFuncOnClick(
        Number(event.target.parentNode.dataset.id)
      );

      showTaskDetails(todoObjById);
    });

    edit.addEventListener("click", (event) => {
      const todoObjById = todoGetTaskObjByIdFuncOnClick(
        Number(event.target.parentNode.dataset.id)
      );
      // create edit form, set form inputs to curren values,
      // on submit edit todo on page and call func to edit todo in array
      editTodo(todoObjById);
    });

    deleteBtn.addEventListener("click", (event) => {
      const todoObjById = todoGetTaskObjByIdFuncOnClick(
        Number(event.target.parentNode.dataset.id)
      );
      console.log("object to delete");
      console.log(todoObjById.getProperties());

      deleteTodoOnPage(todoObjById);
      todoDeleteTaskObjByIdFuncOnClick(
        Number(event.target.parentNode.dataset.id)
      );
    });
  }

  function toggleTaskCompletion(checkboxEl, titleEl) {
    checkboxEl.classList.toggle("fa-square");
    checkboxEl.classList.toggle("fa-check-square");

    if (checkboxEl.classList.contains("fa-check-square")) {
      titleEl.style.textDecoration = "line-through";
    } else {
      titleEl.style.textDecoration = "none";
    }
  }

  function addTaskCompletionListener(functionOnClick) {
    todoTaskCompletionFuncOnClick = functionOnClick;
  }

  function setTodoGetObjectByIdFunc(functionOnClick) {
    todoGetTaskObjByIdFuncOnClick = functionOnClick;
  }

  function setTodoEditObjectByIdFunc(functionOnClick) {
    todoEditTaskObjByIdFuncOnClick = functionOnClick;
  }

  function setTodoDeleteObjectByIdFunc(functionOnClick) {
    todoDeleteTaskObjByIdFuncOnClick = functionOnClick;
  }

  function setTodoGetProjects(functionOnClick) {
    todoGetProjectsFunc = functionOnClick;
  }

  function showTaskDetails(obj) {
    const todoDetailsContainer = document.createElement("div");
    todoDetailsContainer.classList.add("details-container");

    todoDetailsContainer.innerHTML = `
    <div class="details-wrapper">
      <button id="close-details"><i class="fas fa-times"></i></button>
      <h3>${obj.getTitle()}</h3>
      <p id="details-description">Description: ${obj.getDescription()}</p>
      <p id="details-date">Due Date: ${obj.getDueDate()}</p>
      <p id="details-priority">Priority: ${obj.getPriority()}</p>
      <p id="details-project">Project: ${obj.getProject()}</p>
    </div>`;
    todoDetailsContainer.style.animation = "fade-in 0.5s";
    document.querySelector("body").appendChild(todoDetailsContainer);

    closeDetailsOnBtn();
  }

  function removeDetails() {
    const detailsContainer = document.querySelector(".details-container");
    detailsContainer.style.animation = "fade-out 0.5s";
    setTimeout(() => detailsContainer.remove(), 450);
  }

  function closeDetailsOnBtn() {
    const closeDetailsBtn = document.getElementById("close-details");
    closeDetailsBtn.addEventListener("click", () => {
      removeDetails();
    });
  }

  function editTodo(todoObj) {
    addEditFormOnPage(todoObj);
  }

  function addEditFormOnPage(todoObj) {
    createTodoForm(todoGetProjectsFunc());
    submitEditFormHandler(todoObj.getIdNum());
    setEditFormInputsToObjectVals(todoObj);
  }

  function setEditFormInputsToObjectVals(todoObj) {
    const formH3 = document.querySelector(".form-h3");
    formH3.innerText = "Edit Task";

    const titleInput = document.getElementById("title");
    titleInput.value = `${todoObj.getTitle()}`;

    const descriptionInput = document.getElementById("description");
    descriptionInput.value = `${todoObj.getDescription()}`;

    const dueDateInput = document.getElementById("due-date");
    const curDueDate = todoObj.getDueDate();
    // Format date to YYYY-mm-dd -> 2021-07-11
    dueDateInput.value = `${
      curDueDate.slice(6) +
      curDueDate.slice(2, 5) +
      "-" +
      curDueDate.slice(0, 2)
    }`;
    const priorityInput = document.getElementById("priority");
    priorityInput.value = `${todoObj.getPriority()}`;

    const projectInput = document.getElementById("project");
    projectInput.value = `${todoObj.getProject()}`;
  }

  function submitEditFormHandler(idNum) {
    const editTodoForm = document.getElementById("add-task-form");

    editTodoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const todoFormObj = {
        idNum,
        title: editTodoForm.elements.title.value,
        description: editTodoForm.elements.description.value,
        dueDate: format(
          parseISO(editTodoForm.elements.duedate.value),
          "dd-MM-yyyy"
        ),
        priority: editTodoForm.elements.priority.value,
        project: editTodoForm.elements.project.value,
      };

      todoEditTaskObjByIdFuncOnClick(todoFormObj);
      // change todo on page
      changeTodoOnPage(idNum, todoFormObj);
      removeForm();
    });
  }

  function changeTodoOnPage(idNum, obj) {
    const todoContainer = document.querySelector(`div[data-id="${idNum}"]`);
    todoContainer.querySelector(".todo-title").innerText = obj.title;
    const priorityEl = todoContainer.querySelector(".fa-flag");
    setPriorityOnPage(obj.priority, priorityEl);
  }

  function deleteTodoOnPage(todoObj) {
    const todoContainer = document.querySelector(
      `div[data-id="${todoObj.getIdNum()}"]`
    );

    todoContainer.style.animation = "fade-out 0.4s";
    setTimeout(() => todoContainer.remove(), 350);
  }

  // create project
  function addProjectToPage(project) {
    const projectsDiv = document.querySelector(".projects");

    const projectP = document.createElement("p");
    projectP.classList.add("todo-project");
    projectP.innerText = project;

    projectsDiv.appendChild(projectP);
  }

  function createProjectForm() {
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    formContainer.innerHTML = `
    <div class="project-form-wrapper">
      <button id="close-form"><i class="fas fa-times"></i></button>
      <h3 class="form-h3">Add New Project</h3>
      <form id="add-project-form">
        <div class="form-control form-title">
          <label for="title">Title</label>
          <input type="text" name="title" id="title"
              placeholder="Enter todo title" required>
        </div>

        <input type="submit" value="Submit" id="form-submit">
      </form>
    </div>`;
    formContainer.style.animation = "fade-in 0.5s";
    document.querySelector("body").appendChild(formContainer);

    closeFormHandler();
  }

  function addingProjectFormHandler(todoProjectHandler, todoProjectsArr) {
    const addProjectBtn = document.getElementById("add-project");
    addProjectBtn.addEventListener("click", () => {
      console.log("test project");
      if (!document.getElementById("add-project-form")) {
        createProjectForm();
        submitFormHandler(todoProjectHandler);
      }
    });

    function submitFormHandler(todoProjectFormHandler) {
      const newProjectForm = document.getElementById("add-project-form");

      newProjectForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nexProject = newProjectForm.elements.title.value;

        if (todoProjectFormHandler(nexProject)) {
          removeForm();
          addProjectToPage(todoProjectsArr[todoProjectsArr.length - 1]);
        }
      });
    }
  }

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

  function createTodoForm(todoProjectsArr) {
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    formContainer.innerHTML = `
    <div class="form-wrapper">
      <button id="close-form"><i class="fas fa-times"></i></button>
      <h3 class="form-h3">Add New Task</h3>
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
          </select>
        </div>

          <input type="submit" value="Submit" id="form-submit">
      </form>
    </div>`;

    formContainer.style.animation = "fade-in 0.5s";
    document.querySelector("body").appendChild(formContainer);

    const projectsSelect = document.querySelector("select#project");
    todoProjectsArr.forEach((project) => {
      projectsSelect.innerHTML += `<option value="${project}">${project}</option>`;
    });

    closeFormHandler();
  }

  function closeFormHandler() {
    const closeFormBtn = document.getElementById("close-form");
    closeFormBtn.addEventListener("click", () => {
      removeForm();
    });
  }

  function addingTodoFormHandler(todoFormHandler, todoArr, todoProjectsArr) {
    const addTaskBtn = document.getElementById("add-task");
    addTaskBtn.addEventListener("click", () => {
      if (!document.getElementById("add-task-form")) {
        createTodoForm(todoGetProjectsFunc());
        submitFormHandler(todoFormHandler);
      }
    });

    function submitFormHandler(todoFormHandler) {
      const newTodoForm = document.getElementById("add-task-form");

      newTodoForm.addEventListener("submit", (event) => {
        event.preventDefault();

        console.log(newTodoForm.elements.duedate.value);
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
    } else if (event.target == document.querySelector(".details-container")) {
      removeDetails();
    }
  });

  return {
    addTodoToPage,
    addingTodoFormHandler,
    addTaskCompletionListener,
    setTodoGetObjectByIdFunc,
    setTodoEditObjectByIdFunc,
    setTodoDeleteObjectByIdFunc,
    addingProjectFormHandler,
    setTodoGetProjects,
  };
})();

export { dom };
