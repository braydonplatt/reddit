var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService){

$scope.getPosts = function(){
	FirebaseService.postsDev($scope.posts).then(function(response){

		});
	};
	$scope.getPosts();
});