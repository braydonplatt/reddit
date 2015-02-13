var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService){

$scope.getPosts = function(){
	FirebaseService.postsDev($scope.posts).then(function(response){

		});
	};
	$scope.getPosts();

$scope.addPost = function(){
	FirebaseService.addNewPost($scope.newPost).then(function(){
      $scope.getPosts();
	});
};
});