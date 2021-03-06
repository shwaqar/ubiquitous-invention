import Store from '../common/storage/storage.service'

function InboxController($scope, $filter) {
  'ngInject';
  var vm = this;

  var todos = Store.init();
  vm.todos = todos;

  vm.newTodo = '';
  vm.status = '';

  vm.addTodo = addTodo;
  vm.removeTodo = removeTodo;
  vm.saveTodo = saveTodo;
  vm.toggleCompleted = toggleCompleted;
  vm.clearCompletedTodos = clearCompletedTodos;
  vm.markAll = markAll;
  vm.changeStatus = changeStatus;

  $scope.$watch('vm.todos', () => {
    vm.remainingCount = $filter('filter')(todos, {
      completed: false
    }).length;
    vm.completedCount = todos.length - vm.remainingCount;
    vm.allChecked = !vm.remainingCount;
  }, true);

  function addTodo() {
    var newTodo = {
      title: vm.newTodo.trim(),
      completed: false
    };

    if (!newTodo.title) {
      return;
    }

    Store.insert(newTodo);
    vm.newTodo = '';
    vm.todos = Store.get();
  }

  function removeTodo(todo) {
    Store.deleteTodo(todo);
  }

  function saveTodo(todo) {
    Store.put(todo);
  }

  function toggleCompleted(todo, completed) {
    if (angular.isDefined(completed)) {
      todo.completed = completed;
    }
    Store.put(todo, todos.indexOf(todo))
  }

  function clearCompletedTodos() {
    Store.clearCompleted();
  }

  function markAll(completed) {
    todos.forEach(todo => {
      if (todo.completed !== completed) {
        vm.toggleCompleted(todo, completed);
      }
    });
  }

  function changeStatus(status) {
    vm.status = status;

    vm.statusFilter = (status === 'active') ? {
      completed: false
    } : (status === 'completed') ? {
      completed: true
    } : {};
  }
}

export {
  InboxController
};
