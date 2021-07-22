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

const testTodo = todoFactory("Test TODO", "Todo to test", "20-07-2021", "low");
const test1Todo = todoFactory(
  "Test 1 TODO",
  "Todo to test",
  "19-07-2021",
  "medium",
  "Inbox"
);
const test2Todo = todoFactory(
  "Test 2 TODO",
  "Todo to test",
  "20-07-2021",
  "high",
  "Inbox"
);
const test3Todo = todoFactory(
  "Test 3 TODO",
  "Todo to test",
  "19-07-2021",
  "low",
  "Test"
);

const test4Todo = todoFactory(
  "Test 4 TODO",
  "Todo to test",
  "13-07-2021",
  "medium",
  "Secret Project"
);

const test5Todo = todoFactory(
  "Test 5 TODO",
  "Todo to test",
  "18-07-2021",
  "low",
  "Test"
);

const test6Todo = todoFactory(
  "Test 6 TODO",
  "Todo to test",
  "18-07-2021",
  "high",
  "Wow"
);

todoArr.push(testTodo);
todoArr.push(test1Todo);
todoArr.push(test2Todo);
todoArr.push(test3Todo);
todoArr.push(test4Todo);
todoArr.push(test5Todo);
todoArr.push(test6Todo);

todoArr.forEach((todo) => {
  dom.addTodoToPage(todo);
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
