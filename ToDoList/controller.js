var app = angular.module("ToDoList", ['LocalStorageModule']);

app.controller("TodoController",($scope, localStorageService)=>{

    if(localStorageService.get('lista')){
        $scope.todos = localStorageService.get('lista');
    }else{
        $scope.todos = [];
    }
    // escucha los cambios y lo guarda
    $scope.$watchCollection('todos',(newValue, oldValue)=>{
        localStorageService.set("lista", $scope.todos);
    });
    
    $scope.addActiv = ()=>{
        $scope.todos.push($scope.newActiv);
        $scope.newActiv = {};
    }

    $scope.cleanList = ()=>{
        $scope.todos = [];
    }

});