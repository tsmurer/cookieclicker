var app = angular.module("CookieClicker", []);

app.controller("cookie-controller", function($scope){
    $scope.cookies = 0;
    $scope.click = function() {
        $scope.cookies++;
        console.log($scope.cookies);
    }

});