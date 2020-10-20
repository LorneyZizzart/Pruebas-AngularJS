var app = angular.module("MyFilter", [])
    .filter("upper", ()=>{
        return (value)=>{
            return value.toUpperCase();
        }
    })

app.controller("FilterController",($scope)=>{
    $scope.palabra = "jhonny san";
    $scope.costo = 23;
});