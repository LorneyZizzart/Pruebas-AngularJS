var app = angular.module("Module", [])
    .run(($rootScope)=>{
        $rootScope.nombre = 'Jhonny San';
    });

app.controller("Controller",($scope)=>{
    $scope.nombre += ' Gutierrez';
    setTimeout(()=>{
        $scope.$apply(()=>{
            $scope.nombre = 'Lorney';
        })        
    },1000)
});

app.controller('ChildController', ($scope)=>{
    $scope.nombre += ' Villca';
});