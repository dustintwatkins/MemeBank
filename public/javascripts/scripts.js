var myApp = angular.module("myApp", ["firebase"]);
myApp.controller("memeBank",["$scope", "$firebaseArray",
	function($scope, $firebaseArray){
		console.log("entered");
		var ref = firebase.database().ref().child("memes");
		$scope.picBank = $firebaseArray(ref);
		$scope.update = function(pic){
			console.log("entered second");
			var meme = pic;
			console.log(meme);
			$scope.picBank.$add(meme);
			pic.url = ""; 
		}
	} 
	]);
