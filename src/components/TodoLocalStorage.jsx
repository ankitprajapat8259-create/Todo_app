const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  try {
    const rawTodos = localStorage.getItem(todoKey);

    // if null, empty string, or "undefined" → return []
    if (!rawTodos || rawTodos === "undefined") {
      return [];
    }

    return JSON.parse(rawTodos);
  } catch (error) {
    console.error("LocalStorage JSON Error:", error);

    // If JSON is corrupted, reset it
    localStorage.setItem(todoKey, JSON.stringify([]));
    return [];
  }
};

export const setLocalStorageTodoData = (task) => {
  localStorage.setItem(todoKey, JSON.stringify(task));
};
