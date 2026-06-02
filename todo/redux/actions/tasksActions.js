export const errorMessage = () => {
  return {
    type: "errorMessage",
    payload: "Задача не может быть пустой",
  };
};

export const setErrorToZero = () => {
  return {
    type: "errorToZero",
  };
};

export const fetchTasks = (savedTasks) => {
  return {
    type: "fetchTasks",
    payload: savedTasks,
  };
};

export const addTitle = (title) => {
  return {
    type: "addTitle",
    payload: {
      id: crypto.randomUUID(),
      title: title,
      isDone: false,
    },
  };
};

export const editTitle = (id, newTitle) => {
  return {
    type: "editTitle",
    payload: {
      id: id,
      newTitle: newTitle,
    },
  };
};

export const deleteTitle = (id) => {
  return {
    type: "deleteTitle",
    payload: {
      id: id,
    },
  };
};

export const togglerTask = (id) => {
  return {
    type: "togglerTask",
    payload: {
      id: id,
    },
  };
};

export const clearCompetedTask = () => {
  return {
    type: "clearCompetedTask",
  };
};

export const filterTasks = (filter) => {
  return {
    type: "filterTasks",
    payload: filter,
  };
};
