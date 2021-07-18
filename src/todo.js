import { format } from "date-fns";

let todoArr = [];

const todoFactory = (title, description, dueDate, priority, project) => {
  let completed = false;
  const idNum = idCounter();

  const getIdNum = () => idNum;
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getProject = () => project;
  const getCompletion = () => completed;

  const getProperties = () => ({
    idNum,
    title,
    description,
    dueDate,
    priority,
    project,
    completed,
  });

  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (newDueDate) => (dueDate = newDueDate);
  const setPriority = (newPriority) => (priority = newPriority);
  const setProject = (newProject) => (project = newProject);
  const setCompletion = (newComplited) => (completed = newComplited);

  const setProperties = (
    newTitle,
    newDescription,
    newDueDate,
    newPriority,
    newProject
  ) => {
    setTitle(newTitle);
    setDescription(newDescription);
    setDueDate(newDueDate);
    setPriority(newPriority);
    setProject(newProject);
  };

  return {
    getIdNum,
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getProject,
    getCompletion,
    getProperties,
    setCompletion,
    setProperties,
  };
};

function addNewTodoByUser(formTodoObj, todoArr) {
  // check if todo exists
  for (let i = 0; i < todoArr.length; i++) {
    if (
      formTodoObj.title === todoArr[i].getTitle() &&
      formTodoObj.project === todoArr[i].getProject() &&
      formTodoObj.dueDate === todoArr[i].getDueDate()
    ) {
      alert("Task is already in the Project!");
      return false;
    }
  }
  // if not exists add to array
  const todoItem = createTodoObjWithFormInfo(formTodoObj);
  addTodoToArr(todoItem);
  console.log(formTodoObj);
  return true;
}

function createTodoObjWithFormInfo(formTodoObj) {
  return todoFactory(
    formTodoObj.title,
    formTodoObj.description,
    formTodoObj.dueDate,
    formTodoObj.priority,
    formTodoObj.project
  );
}

function addTodoToArr(todoObj) {
  todoArr.push(todoObj);
  console.log(todoArr);
  console.log(todoArr[0].getTitle());
}

function getTodoIndexById(idNum) {
  function findById(todo) {
    return todo.getIdNum() === idNum;
  }

  return todoArr.findIndex(findById);
}

function setTaskCompletionById(idNum) {
  const index = getTodoIndexById(idNum);
  if (index) {
    const currentCompletion = todoArr[index].getCompletion();

    todoArr[index].setCompletion(!currentCompletion);
    console.log(todoArr[index].getProperties());
  }
}

function getTodoObjectById(idNum) {
  const index = getTodoIndexById(idNum);

  return todoArr[index];
}

function editTodoObjById(obj) {
  const index = getTodoIndexById(obj.idNum);
  console.log(index);

  todoArr[index].setProperties(
    obj.title,
    obj.description,
    obj.dueDate,
    obj.priority,
    obj.project
  );
  console.log(todoArr[index].getProperties());
}

function deleteTodoObjById(idNum) {
  const index = getTodoIndexById(idNum);
  todoArr.splice(index, 1);
  todoArr.forEach((todoArrObj) => {
    console.log(todoArrObj.getProperties());
  });
}

const counterCreator = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const idCounter = counterCreator();

export {
  todoArr,
  todoFactory,
  addNewTodoByUser,
  idCounter,
  setTaskCompletionById,
  getTodoObjectById,
  editTodoObjById,
  deleteTodoObjById,
};
