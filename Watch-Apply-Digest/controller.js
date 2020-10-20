var app = angular.module("Module", []);

app.controller("Controller",($scope)=>{
    $scope.nombre = "jhonny san";

    // setTimeout(()=>{       
    //     $scope.$apply(()=>{
    //         $scope.nombre += ' Gutierrez';
    //     });
    // }, 2000);


    // document.querySelector('#mybtn').addEventListener('click', ()=>{
    //         $scope.$apply(()=>{
    //             $scope.nombre += ' Gutierrez';
    //         });
    // })
});