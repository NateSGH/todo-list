import { format } from "date-fns";

let todoArr = [];

let projectsArr = ["Inbox", "Test", "Wow", "Secret Project"];

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
    // idNum,
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

  // add to storage
  saveTodoToLocalStorage(todoItem);
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

function addNewProjectByUser(formProject) {
  // check if project exists
  for (let i = 0; i < projectsArr.length; i++) {
    if (formProject === todoArr[i]) {
      alert("Project is already exists!");
      return false;
    }
  }
  // if not exists add to array
  addProjectToArr(formProject);
  return true;
}

function addProjectToArr(project) {
  projectsArr.push(project);
  console.log(projectsArr);
  saveProjectsToLocalStorage();
}

function deleteProject(projectToDelete) {
  const index = getProjectIndex(projectToDelete);

  projectsArr.splice(index, 1);
  saveProjectsToLocalStorage();
  console.log(projectsArr);
}

function getProjectIndex(projectToFind) {
  function checkProject(project) {
    return project === projectToFind;
  }

  return projectsArr.findIndex(checkProject);
}

function getProjects() {
  return projectsArr;
}

function getTodos() {
  return todoArr;
}

function addTodoToArr(todoObj) {
  todoArr.push(todoObj);
  console.log(todoArr);
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

  const oldTodoTitle = todoArr[index].getTitle();

  todoArr[index].setProperties(
    obj.title,
    obj.description,
    obj.dueDate,
    obj.priority,
    obj.project
  );

  replaceTodoInLocalStorage(oldTodoTitle, todoArr[index]);

  console.log(todoArr[index].getProperties());
}

function deleteTodoObjById(idNum) {
  const index = getTodoIndexById(idNum);

  deleteTodoFromLocalStorage(todoArr[index].getTitle());

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

// Local Storage

function saveTodoToLocalStorage(todoObj) {
  const todoTosave = todoObj.getProperties();
  localStorage.setItem(`todo${todoTosave.title}`, JSON.stringify(todoTosave));
}

function replaceTodoInLocalStorage(oldTodoTitle, newTodoObj) {
  localStorage.removeItem(`todo${oldTodoTitle}`);

  const newTodo = newTodoObj.getProperties();
  localStorage.setItem(`todo${newTodo.title}`, JSON.stringify(newTodo));
}

function deleteTodoFromLocalStorage(todoTitle) {
  localStorage.removeItem(`todo${todoTitle}`);
}

function saveProjectsToLocalStorage(todoObj) {
  localStorage.setItem(`projects`, JSON.stringify(projectsArr));
}

export {
  todoArr,
  projectsArr,
  todoFactory,
  addNewTodoByUser,
  idCounter,
  setTaskCompletionById,
  getTodoObjectById,
  editTodoObjById,
  deleteTodoObjById,
  addNewProjectByUser,
  getProjects,
  getTodos,
  deleteProject,
};
