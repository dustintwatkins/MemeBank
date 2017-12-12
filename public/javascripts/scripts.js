var myApp = angular.module("myApp", ["firebase"]);
myApp.controller("memeBank",["$scope", "$firebaseArray",
	function($scope, $firebaseArray){
		console.log("entered");
		var ref = firebase.database().ref().child("memes");
		$scope.picBank = $firebaseArray(ref);
		$scope.update = function(pic){
			console.log(pic);
			var meme = {URL:$scope.pic.URL, name:$scope.pic.name};
			console.log(meme);
			$scope.picBank.$add(meme);
			pic.url = ""; 
			console.log(meme.name);
			console.log(meme.URL);
			$scope.imageSource = meme;

		}
	} 
	]);
