// Declare app level module which depends on views, and components
var app = angular.module('myApp', []);

app.controller('myController',function($scope,$http){
    
    $http.get('json/summary.json').success(function(response){
        $scope.dataSummary=response;
    });
    
    $http.get('json/experience.json').success(function(response){
        $scope.dataExperience=response;
    });
    
    $http.get('json/project.json').success(function(response){
        $scope.dataProject=response;
    });
    
    $http.get('json/skill.json').success(function(response){
        $scope.dataSkill=response;
    });
    
     $http.get('json/education.json').success(function(response){
        $scope.dataEducation=response;
    });
});
