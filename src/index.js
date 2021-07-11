import "./style.css";
import {
  todoArr,
  todoFactory,
  addNewTodoByUser,
  setTaskCompletionById,
  getTodoObjectById,
} from "./todo.js";
import { dom } from "./domRelated.js";

const testTodo = todoFactory("Test TODO", "Todo to test", 10, "low");
const test1Todo = todoFactory("Test 1 TODO", "Todo to test", 10, "medium");
const test2Todo = todoFactory("Test 2 TODO", "Todo to test", 10, "high");
const test3Todo = todoFactory("Test 3 TODO", "Todo to test", 10, "low");

todoArr.push(testTodo);
todoArr.push(test1Todo);
todoArr.push(test2Todo);
todoArr.push(test3Todo);

dom.addTodoToPage(testTodo);
dom.addTodoToPage(test1Todo);
dom.addTodoToPage(test2Todo);
dom.addTodoToPage(test3Todo);

dom.formHandler(addNewTodoByUser, todoArr);
dom.addTaskCompletionListener(setTaskCompletionById);
dom.addTaskDetailsListener(getTodoObjectById);
