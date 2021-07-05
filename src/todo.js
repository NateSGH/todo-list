const todoFactory = (title, description, dueDate, priority) => {
  const todoObj = {
    title,
    description,
    dueDate,
    priority,
  };

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  const getProperties = () => todoObj;

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getProperties,
  };
};

export { todoFactory };
