var haritApp = angular.module('haritApp'); // Notice that this is similar to 2AngularModule.js. There is a subtle difference. We have not specified [] in this. 
//This is how we refer to angular modules. You will find the same thing in 4angularDirective. Imagine this to be a pointer to the same module that we "DECLARED" in 2angularModule
haritApp.controller("haritController", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.emailAddress = "";
    $scope.emailAddressConfirm = "";

    $scope.onSubmit = function() {
        alert('Harit, Your form was valid and is now submitted')
    };
});

//