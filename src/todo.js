import { format } from "date-fns";

const todoFactory = (title, description, dueDate, priority, project) => {
  const todoObj = {
    title,
    description,
    dueDate,
    priority,
    project,
  };

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getProject = () => project;

  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (newDueDate) => (dueDate = newDueDate);
  const setPriority = (newPriority) => (priority = newPriority);
  const setProject = (newProject) => (project = newProject);

  const getProperties = () => todoObj;

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getProject,
    getProperties,
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
  addTodoToArr(todoItem, todoArr);
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

function addTodoToArr(todoObj, todoArr) {
  todoArr.push(todoObj);
  console.log(todoArr);
  console.log(todoArr[0].getTitle());
}

export { todoFactory, addNewTodoByUser };
