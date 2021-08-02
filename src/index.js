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
} from "./todo.js";
import { dom } from "./domRelated.js";
import { format } from "date-fns";

const test1Todo = todoFactory(
  "Test 1 TODO",
  "Todo to test",
  "01-08-2021",
  "medium",
  "Inbox"
);
const test2Todo = todoFactory(
  "Test 2 TODO",
  "Todo to test",
  "20-08-2021",
  "high",
  "Inbox"
);
const test3Todo = todoFactory(
  "Test 3 TODO",
  "Todo to test",
  "01-08-2021",
  "low",
  "Test"
);

const test4Todo = todoFactory(
  "Test 4 TODO",
  "Todo to test",
  "05-08-2021",
  "medium",
  "Secret Project"
);

const test5Todo = todoFactory(
  "Test 5 TODO",
  "Todo to test",
  "08-08-2021",
  "low",
  "Test"
);

const test6Todo = todoFactory(
  "Test 6 TODO",
  "Todo to test",
  "08-08-2021",
  "high",
  "Wow"
);

const test7Todo = todoFactory(
  "Test 7 TODO",
  "Todo to test",
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

      todoArr.push(
        todoFactory(
          todo.title,
          todo.description,
          todo.dueDate,
          todo.priority,
          todo.project
        )
      );
    }
  }
}

function fillProjectsArrWithLocalStorageProjects() {
  projectsArr.splice(0, projectsArr.length);

  let tempArr = JSON.parse(localStorage.getItem("projects"));

  tempArr.forEach((item) => {
    projectsArr.push(item);
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
