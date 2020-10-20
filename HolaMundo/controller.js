var app = angular.module("MyFirstApp", []);
app.controller("FirsController",["scope", "$http", ($scope, $http)=>{
    $scope.nombre = "Jhonny";

    $scope.newComentario = {};

    $scope.comentarios = [
        {
            comentario: "Buen tutorial",
            usuario: "Jhonny"
        },
        {
            comentario: "Mal comentario",
            usuario: "Luis"
        }
    ];

    $scope.addComentario = ()=>{
        $scope.comentarios.push($scope.newComentario);
        $scope.newComentario = {};
    }
}])