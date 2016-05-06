// Declare app level module which depends on views, and components
var app = angular.module('myApp', []);

app.controller('myController',function($scope,$http){
    $http.get('json/profile.json').success(function(response){
        $scope.dataProfile=response; 
    });
    
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
    
    <!-- Profile -->
    $scope.isVisibleProfile = "hidden";
    
    $scope.mouseOverProfile = function() {
        $scope.isVisibleProfile = "";
    };
    
    $scope.mouseLeaveProfile = function() {
        $scope.isVisibleProfile = "hidden";
    };
    
    <!-- Summary -->
    $scope.isVisibleSummary = "hidden";
    
    $scope.mouseOverSummary = function() {
        $scope.isVisibleSummary = "";
    };
    
    $scope.mouseLeaveSummary = function() {
        $scope.isVisibleSummary = "hidden";
    };
    
    <!-- Experience -->
    $scope.isVisibleExperience = "hidden";
    
    $scope.mouseOverExperience = function() {
        $scope.isVisibleExperience = "";
    };
    
    $scope.mouseLeaveExperience = function() {
        $scope.isVisibleExperience = "hidden";
    };
    
    $scope.deleteExperience = function(experience) {
        var index = $scope.dataExperience.indexOf(experience);
        $scope.dataExperience.splice(index,1);
    };
    
    $scope.addExperience = function() {
        $scope.dataExperience.push(
            {
                "title":"Title",
                "date":"Time",
                "description":"Description" 
            }
        );
    };
    
    <!-- Project -->
    $scope.isVisibleProject = "hidden";
    
    $scope.mouseOverProject = function() {
        $scope.isVisibleProject = "";
    };
    
    $scope.mouseLeaveProject = function() {
        $scope.isVisibleProject = "hidden";
    };
    
    $scope.deleteProject = function(project) {
        var index = $scope.dataProject.indexOf(project);
        $scope.dataProject.splice(index,1);
    };
    
    $scope.addProject = function() {
        $scope.dataProject.push(
            {
                "title":"Title",
                "date":"Time",
                "description":"Description" 
            }
        );
    };
    
    <!-- Skill -->
    $scope.isVisibleSkill = "hidden";
    
    $scope.mouseOverSkill = function() {
        $scope.isVisibleSkill = "";
    };
    
    $scope.mouseLeaveSkill = function() {
        $scope.isVisibleSkill = "hidden";
    };
    
    $scope.deleteSkill = function(skill) {
        var index = $scope.dataSkill.indexOf(skill);
        $scope.dataSkill.splice(index,1);
    };
    
    $scope.addSkill = function() {
        $scope.dataSkill.push({"text":"Skill Name"}
        );
    };
    
    <!-- Education -->
    $scope.isVisibleEducation = "hidden";
    
    $scope.mouseOverEducation = function() {
        $scope.isVisibleEducation = "";
    };
    
    $scope.mouseLeaveEducation = function() {
        $scope.isVisibleEducation = "hidden";
    };
    
    $scope.deleteEducation = function(education) {
        var index = $scope.dataEducation.indexOf(education);
        $scope.dataEducation.splice(index,1);
    };
    
    $scope.addEducation = function() {
        $scope.dataEducation.push(
            {
                "title":"Scholl",
                "date":"Time", 
            }
        );
    };
});
