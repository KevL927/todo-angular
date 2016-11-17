angular.module('todoListApp', [])
  .controller('mainCtrl', function($scope, dataService) {

    $scope.helloWorld = dataService.helloWorld;

    dataService.getTodos(function(response) {
      console.log(response);
      $scope.todos = response.data;
    });

  })

  .service('dataService', function($http) {
    this.getTodos = function(callback) {
      $http.get('mock/todos.json')
      .then(callback)
    }
  });
