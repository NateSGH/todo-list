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
  "07-08-2021",
  "low",
  "Inbox"
);

console.log(localStorage.length);

// localStorage.clear();

if (localStorage.length === 0) {
  todoArr.push(test1Todo);
  todoArr.push(test2Todo);
  todoArr.push(test3Todo);
  todoArr.push(test4Todo);
  todoArr.push(test5Todo);
  todoArr.push(test6Todo);
  todoArr.push(test7Todo);

  for (let i = 0; i < todoArr.length; i++) {
    let prop = todoArr[i].getProperties();
    console.log(prop);
    localStorage.setItem(`todo${prop.title}`, JSON.stringify(prop));
  }
  console.log(localStorage);
} else {
  console.log(localStorage);
  todoArr.splice(0, todoArr.length - 1);
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

todoArr.forEach((todo) => {
  // dom.addTodoToPage(todo);
  if (todo.getProject() === "Inbox") {
    dom.addTodoToPage(todo);
  }
});

getProjects().forEach((project) => {
  if (project !== "Inbox") {
    dom.addProjectToPage(project);
  }
});

dom.addingTodoFormHandler(addNewTodoByUser, todoArr, projectsArr);
dom.addTaskCompletionListener(setTaskCompletionById);
dom.setTodoGetObjectByIdFunc(getTodoObjectById);
dom.setTodoEditObjectByIdFunc(editTodoObjById);
dom.setTodoDeleteObjectByIdFunc(deleteTodoObjById);
dom.setTodoGetProjects(getProjects);
dom.addingProjectFormHandler(addNewProjectByUser, projectsArr);
dom.setTodoGetTodos(getTodos);

// sketch -> WIP

// const todo = JSON.parse(localStorage.getItem("1"));

// console.log(todo);
