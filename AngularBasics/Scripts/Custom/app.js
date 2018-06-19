angular.module("todoListApp", [])
    .controller("mainCtrl", function ($scope) {
        $scope.helloWorld = function () {
            console.log("Hello there! This is the helloWorld controller function, in the mainCtrl!");
        };

        $scope.todos = [
            { "name": "Clean the House"},
            { "name": "Water the Dog"},
            { "name": "Feed the Lawn"},
            { "name": "Pay dem Bills"},
            { "name": "Run"},
            { "name": "Swim"}
        ]

    });