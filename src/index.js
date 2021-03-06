import "./style.css";
import {
  todoArr,
  projectsArr,
  todoFactory,
  addNewTodoByUser,
  setTaskCompletionById,
  getTodoObjectById,
  editTodoObjById,
  deleteTodoObjById,
  addNewProjectByUser,
  getProjects,
  getTodos,
  deleteProject,
  addProjectToArr,
  addTodoToArr,
} from "./todo.js";
import { dom } from "./domRelated.js";
import { format, addDays } from "date-fns";

const test1Todo = todoFactory(
  "Go for a 30min walk",
  "Default todo",
  format(addDays(new Date(), 5), "dd-MM-yyyy"),
  "medium",
  "Inbox"
);
const test2Todo = todoFactory(
  "Pick a movie for movie night",
  "Default todo",
  format(addDays(new Date(), 3), "dd-MM-yyyy"),
  "high",
  "Inbox"
);
const test3Todo = todoFactory(
  "Cook diner",
  "Default todo",
  format(addDays(new Date(), 10), "dd-MM-yyyy"),
  "low",
  "Test"
);

const test4Todo = todoFactory(
  "Check email",
  "Default todo",
  format(new Date(), "dd-MM-yyyy"),
  "medium",
  "Secret Project"
);

const test5Todo = todoFactory(
  "Buy milk",
  "Default todo",
  format(new Date(), "dd-MM-yyyy"),
  "low",
  "Test"
);

const test6Todo = todoFactory(
  "Clean the house",
  "Default todo",
  format(addDays(new Date(), 1), "dd-MM-yyyy"),
  "high",
  "Wow"
);

const test7Todo = todoFactory(
  "Meet with Sam",
  "Default todo",
  format(new Date(), "dd-MM-yyyy"),
  "low",
  "Inbox"
);

// localStorage.clear();

function firstLoad() {
  let todoTempArr = [];

  todoTempArr.push(test1Todo);
  todoTempArr.push(test2Todo);
  todoTempArr.push(test3Todo);
  todoTempArr.push(test4Todo);
  todoTempArr.push(test5Todo);
  todoTempArr.push(test6Todo);
  todoTempArr.push(test7Todo);

  todoTempArr.forEach((todo) => {
    let prop = todo.getProperties();
    localStorage.setItem(`todo${prop.title}`, JSON.stringify(prop));
  });

  localStorage.setItem(`projects`, JSON.stringify(projectsArr));
}

function fillTodoArrWithLocalStorageTodos() {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("todo")) {
      const todo = JSON.parse(localStorage.getItem(localStorage.key(i)));

      const todoToPush = todoFactory(
        todo.title,
        todo.description,
        todo.dueDate,
        todo.priority,
        todo.project
      );
      todoToPush.setCompletion(todo.completed);

      addTodoToArr(todoToPush);
    }
  }
}

function fillProjectsArrWithLocalStorageProjects() {
  projectsArr.splice(0, projectsArr.length);

  let tempArr = JSON.parse(localStorage.getItem("projects"));

  tempArr.forEach((item) => {
    addProjectToArr(item);
  });
}

function todosLoad() {
  if (localStorage.length === 0) {
    firstLoad();
  }
  fillTodoArrWithLocalStorageTodos();
}

function addExistingTodosToPage() {
  todoArr.forEach((todo) => {
    if (todo.getProject() === "Inbox") {
      dom.addTodoToPage(todo);
    }
  });
}

function addExistingProjectsToPage(params) {
  getProjects().forEach((project) => {
    if (project !== "Inbox") {
      dom.addProjectToPage(project);
      dom.highlightInbox();
    }
  });
}

function initialPageLoad() {
  todosLoad();
  fillProjectsArrWithLocalStorageProjects();
  addExistingTodosToPage();
  addExistingProjectsToPage();
}

initialPageLoad();

dom.addingTodoFormHandler(addNewTodoByUser, todoArr, projectsArr);
dom.addTaskCompletionListener(setTaskCompletionById);
dom.setTodoGetObjectByIdFunc(getTodoObjectById);
dom.setTodoEditObjectByIdFunc(editTodoObjById);
dom.setTodoDeleteObjectByIdFunc(deleteTodoObjById);
dom.setTodoGetProjects(getProjects);
dom.addingProjectFormHandler(addNewProjectByUser, projectsArr);
dom.setTodoGetTodos(getTodos);
dom.setTodoDeleteProject(deleteProject);
