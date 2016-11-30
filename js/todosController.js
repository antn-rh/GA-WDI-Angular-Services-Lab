(function() {
  'use strict';
  angular.module('todosApp')
    .controller('TodosController', TodosController)

  function TodosController() {
    var vm = this;

    vm.allTodos = [
      {description: "Buy groceries", completed: true, image: "http://msbusiness.com/wp-content/uploads/2015/10/groceries.jpg"},
      {description: "Walk the dog", completed: false, image: "https://uproxx.files.wordpress.com/2015/01/dog-walking.jpg?quality=90&w=650&h=444"},
      {description: "Wash the dishes", completed: false, image: "http://myfirsthomeblog.com/wp-content/uploads/2016/03/Washing-Dishes.jpg"},
      {description: "Take out the trash", completed: false, image: "http://www.usnews.com/dims4/USNEWS/078a123/2147483647/resize/970x/quality/85/?url=%2Fcmsmedia%2Ffc%2Fc1%2F5fe5c5ef4747a0074516bdead270%2F150601-editorial.jpg"},
      {description: "Call mom", completed: false, image: "https://www.iapps4you.com/images/apps/77/77519/logo.jpg"},
    ];

    vm.addTodo = addTodo;
    vm.newTodo = {description: "", completed: false, image: ""};

    function addTodo() {
      vm.allTodos.push(vm.newTodo)
      vm.newTodo = {description: "", completed: false, image: ""}
    }
  }
}());
