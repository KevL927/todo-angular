'use strict';

angular.module('todoListApp')
  .controller('mainCtrl', function($scope, dataService) {

    $scope.addTodo = function () {
      var todo = {name: "New entry"}
      $scope.todos.unshift(todo);
    };

    $scope.helloWorld = dataService.helloWorld;
    
    dataService.getTodos(function(response) {
      $scope.todos = response.data;
    });

    $scope.deleteTodo = function (todo, index) {
      dataService.deleteTodo(todo);
      $scope.todos.splice(index, 1);
    };
    
    $scope.saveTodo = function(todo) {
      dataService.saveTodo(todo);
    };
  })