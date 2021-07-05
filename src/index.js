import "./style.css";
import { todoFactory } from "./todo.js";
import { dom } from "./domRelated.js";

const testTodo = todoFactory("Test TODO", "Todo to test", 10, "low");
const test1Todo = todoFactory("Test 1 TODO", "Todo to test", 10, "medium");
const test2Todo = todoFactory("Test 2 TODO", "Todo to test", 10, "high");

console.log(testTodo.getProperties());

dom.addTodoToPage(testTodo);
dom.addTodoToPage(test1Todo);
dom.addTodoToPage(test2Todo);
dom.addTodoToPage(testTodo);
