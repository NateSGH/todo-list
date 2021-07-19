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
} from "./todo.js";
import { dom } from "./domRelated.js";

const testTodo = todoFactory("Test TODO", "Todo to test", "19-07-2021", "low");
const test1Todo = todoFactory(
  "Test 1 TODO",
  "Todo to test",
  "19-07-2021",
  "medium"
);
const test2Todo = todoFactory(
  "Test 2 TODO",
  "Todo to test",
  "19-07-2021",
  "high"
);
const test3Todo = todoFactory(
  "Test 3 TODO",
  "Todo to test",
  "19-07-2021",
  "low"
);

todoArr.push(testTodo);
todoArr.push(test1Todo);
todoArr.push(test2Todo);
todoArr.push(test3Todo);

dom.addTodoToPage(testTodo);
dom.addTodoToPage(test1Todo);
dom.addTodoToPage(test2Todo);
dom.addTodoToPage(test3Todo);

dom.addingTodoFormHandler(addNewTodoByUser, todoArr, projectsArr);
dom.addTaskCompletionListener(setTaskCompletionById);
dom.setTodoGetObjectByIdFunc(getTodoObjectById);
dom.setTodoEditObjectByIdFunc(editTodoObjById);
dom.setTodoDeleteObjectByIdFunc(deleteTodoObjById);
dom.setTodoGetProjects(getProjects);
dom.addingProjectFormHandler(addNewProjectByUser, projectsArr);
