import { format, isThisWeek } from "date-fns";
import parseISO from "date-fns/parseISO";

// DOM module (module pattern)
const dom = (() => {
  const pageContent = document.querySelector(".main-content");
  let todoTaskCompletionFuncOnClick = "";
  let todoGetTaskObjByIdFuncOnClick = "";
  let todoEditTaskObjByIdFuncOnClick = "";
  let todoDeleteTaskObjByIdFuncOnClick = "";
  let todoGetProjectsFunc = "";
  let todoGetTodosFunc = "";
  let todoDeleteProjectFuncOnClick = "";

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
    styleTodoCompletitionOnPage(checkbox, title);

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
      if (confirm("Are you sure you want to delete this Todo?")) {
        const todoObjById = todoGetTaskObjByIdFuncOnClick(
          Number(event.target.parentNode.dataset.id)
        );

        deleteTodoOnPage(todoObjById);
        todoDeleteTaskObjByIdFuncOnClick(
          Number(event.target.parentNode.dataset.id)
        );
      }
    });
  }

  function toggleTaskCompletion(checkboxEl, titleEl) {
    checkboxEl.classList.toggle("fa-square");
    checkboxEl.classList.toggle("fa-check-square");

    styleTodoCompletitionOnPage(checkboxEl, titleEl);
  }

  function styleTodoCompletitionOnPage(checkboxEl, titleEl) {
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

  function setTodoGetTodos(functionOnClick) {
    todoGetTodosFunc = functionOnClick;
  }

  function setTodoDeleteProject(functionOnClick) {
    todoDeleteProjectFuncOnClick = functionOnClick;
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

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("todo-project");
    projectDiv.classList.add("project");

    const projectIcon = document.createElement("i");
    projectIcon.classList.add("fas");
    projectIcon.classList.add("fa-circle");

    const projectP = document.createElement("p");
    projectP.classList.add("project-title");
    projectP.innerText = project;

    const projectDeleteIcon = document.createElement("i");
    projectDeleteIcon.classList.add("fas");
    projectDeleteIcon.classList.add("fa-times");

    projectIcon.addEventListener(
      "click",
      highlightProjectAndAddProjectTodosToPage
    );

    projectP.addEventListener(
      "click",
      highlightProjectAndAddProjectTodosToPage
    );

    function highlightProjectAndAddProjectTodosToPage() {
      highlightProject(projectDiv);
      addProjectTodosByClickOnProject();
    }

    projectDeleteIcon.addEventListener("click", () => {
      if (
        confirm(
          "Are you sure you want to delete this Project? All todos from this project will be deleted too"
        )
      ) {
        todoDeleteProjectFuncOnClick(project);
        updateProjectSectionOnPage();
        addInboxTodosToPage();

        function updateProjectSectionOnPage() {
          document.querySelector(".projects").innerHTML = "";

          todoGetProjectsFunc().forEach((projectFromArr) => {
            if (projectFromArr !== "Inbox") {
              addProjectToPage(projectFromArr);
            }
          });
        }
      }
    });

    function highlightProject(currentProjectDiv) {
      document.querySelectorAll(".todo-project").forEach((projectDiv) => {
        projectDiv.style.backgroundColor = "transparent";
      });

      currentProjectDiv.style.backgroundColor = "rgba(108, 138, 136, 0.2)";
    }

    function addProjectTodosByClickOnProject() {
      document.querySelector(".main-content").innerHTML = "";
      todoGetTodosFunc().forEach((todo) => {
        if (todo.getProject() === projectP.innerText) {
          addTodoToPage(todo);
        }
      });
    }

    projectDiv.appendChild(projectIcon);
    projectDiv.appendChild(projectP);
    projectDiv.appendChild(projectDeleteIcon);
    projectsDiv.appendChild(projectDiv);
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

    formContainer.querySelector("#title").focus();
  }

  function addingProjectFormHandler(todoProjectHandler, todoProjectsArr) {
    const addProjectBtn = document.getElementById("add-project");
    addProjectBtn.addEventListener("click", () => {
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

  function inboxBtnEventListener() {
    const inboxBtn = document.getElementById("inbox");

    inboxBtn.addEventListener("click", () => {
      addInboxTodosToPage();
    });
  }

  function addInboxTodosToPage() {
    highlightSection(document.getElementById("inbox"));
    document.querySelector(".main-content").innerHTML = "";
    todoGetTodosFunc().forEach((todo) => {
      if (todo.getProject() === "Inbox") {
        addTodoToPage(todo);
      }
    });
  }

  //today
  function todayBtnEventListener() {
    const todayBtn = document.getElementById("today");

    todayBtn.addEventListener("click", () => {
      highlightSection(todayBtn);

      document.querySelector(".main-content").innerHTML = "";
      todoGetTodosFunc().forEach((todo) => {
        const todayDate = format(new Date(), "dd-MM-yyyy");
        if (todo.getDueDate() === todayDate) {
          addTodoToPage(todo);
        }
      });
    });
  }

  // this week
  function thisWeekBtnEventListener() {
    const thisWeekBtn = document.getElementById("this-week");

    thisWeekBtn.addEventListener("click", () => {
      highlightSection(thisWeekBtn);
      document.querySelector(".main-content").innerHTML = "";
      todoGetTodosFunc().forEach((todo) => {
        let curDueDate = todo.getDueDate();
        // Format date to YYYY-mm-dd -> 2021-07-11
        curDueDate = `${
          curDueDate.slice(6) +
          curDueDate.slice(2, 5) +
          "-" +
          curDueDate.slice(0, 2)
        }`;
        const todayDate = parseISO(curDueDate);
        if (isThisWeek(todayDate, { weekStartsOn: 1 })) {
          addTodoToPage(todo);
        }
      });
    });
  }

  function highlightSection(sectionBtn) {
    document.querySelectorAll(".section").forEach((section) => {
      section.style.backgroundColor = "transparent";
    });

    sectionBtn.style.backgroundColor = "rgba(108, 138, 136, 0.3)";
  }

  function highlightInbox(params) {
    highlightSection(document.getElementById("inbox"));
  }

  // projects

  // change priority
  function setPriorityOnPage(priority, iconEl) {
    switch (priority) {
      case "low":
        iconEl.style.color = "#60914E"; //#4E9160
        break;
      case "medium":
        iconEl.style.color = "#FF9C44";
        break;
      case "high":
        iconEl.style.color = "#FF4B3D";
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

    formContainer.querySelector("#title").focus();
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

          const projects = document.querySelectorAll(".project");
          projects.forEach((project) => {
            if (
              (project.style.backgroundColor === "rgba(108, 138, 136, 0.3)" &&
                project.innerText === newTodoForm.elements.project.value) ||
              (project.style.backgroundColor === "rgba(108, 138, 136, 0.2)" &&
                project.querySelector(".project-title").innerText ===
                  newTodoForm.elements.project.value)
            ) {
              addTodoToPage(todoArr[todoArr.length - 1]);
            }
          });
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

  document
    .querySelector(".sections-panel")
    .addEventListener("click", (event) => {
      const targetParent = event.target.parentNode;

      if (
        !targetParent.classList.contains("todo-project") &&
        targetParent != document.querySelector(".projects")
      ) {
        document.querySelectorAll(".todo-project").forEach((project) => {
          project.style.backgroundColor = "transparent";
        });
      }
      if (
        event.target.parentNode == document.querySelector(".projects") ||
        targetParent.classList.contains("todo-project")
      ) {
        document.querySelectorAll(".section").forEach((section) => {
          section.style.backgroundColor = "transparent";
        });
      }
    });

  inboxBtnEventListener();
  todayBtnEventListener();
  thisWeekBtnEventListener();

  return {
    addTodoToPage,
    addProjectToPage,
    addingTodoFormHandler,
    addTaskCompletionListener,
    setTodoGetObjectByIdFunc,
    setTodoEditObjectByIdFunc,
    setTodoDeleteObjectByIdFunc,
    addingProjectFormHandler,
    setTodoGetProjects,
    setTodoGetTodos,
    highlightInbox,
    setTodoDeleteProject,
  };
})();

export { dom };
