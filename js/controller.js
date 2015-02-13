var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService){

	FirebaseService.postsDev().then(function(response) {
		$scope.posts = response;
	})

$scope.addPost = function(){
	FirebaseService.addNewPost($scope.newPosts).then(function(){
      FirebaseService.postsDev();
	});
};
});