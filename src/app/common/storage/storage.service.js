var STORAGE_ID = 'todos';
var todos = [];

const _getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
};

const _saveToLocalStorage = (todos) => {
  localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
};

const init = () => {
  todos = _getFromLocalStorage();
  return todos;
};

const clearCompleted = () => {
  var incompleteTodos = todos.filter(todo => !todo.completed);

  angular.copy(incompleteTodos, todos);
  _saveToLocalStorage(todos);
};

const deleteTodo = (todo) => {
  todos.splice(todos.indexOf(todo), 1);
  _saveToLocalStorage(todos);
};

const get = () => {
  return _getFromLocalStorage();
};

const insert = (todo) => {
  todos.push(todo);
  _saveToLocalStorage(todos);
};

const put = (todo, index) => {
  todos[index] = todo;
  _saveToLocalStorage(todos);
};

export default {
  init,
  clearCompleted,
  deleteTodo,
  get,
  insert,
  put,
  todos
}
