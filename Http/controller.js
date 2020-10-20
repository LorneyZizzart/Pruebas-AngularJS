var app = angular.module("MyFirstApp", []);
app.controller("FirsController",($scope, $http)=>{

    $scope.posts = [];
    $scope.newPost = {};
    $scope.loading = true;

    $http.get("https://jsonplaceholder.typicode.com/postss")
        .then((data)=>{
            $scope.posts = data.data;
            $scope.loading = false;
        }, (err)=> {           
            console.log(err);
            $scope.loading = false;
        })

    $scope.addPost = ()=>{
        $http({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title : $scope.newPost.title,
                body : $scope.newPost.body,
                userId: 1
            },
            headers: { 'Content-type': 'application/json; charset=UTF-8',   }
         }).then((response)=>{
            $scope.posts.unshift(response.config.body);
            $scope.loading = false;
            $scope.newPost = {};
         },(err)=>{
            console.log(err);
            $scope.loading = false;
         });
    }

});