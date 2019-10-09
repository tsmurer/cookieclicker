var app = angular.module("cookie-clicker", []);

app.controller("cookie-controller", function($scope)){
    $scope.cookies = 0;
    $scope.click = function() {
        $scope.cookies++;
    }
};