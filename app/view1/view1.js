'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {


      $scope.tva = 0.21;

      $scope.selectedItem ={};
      $scope.articles = [];

      $scope.total = function(){
        var total = 0
        angular.forEach( $scope.articles, function(value, key){

          total += value.price * value.qty;

        } );
        return total;
      };

      $scope.isBig = function(line){
        if(((line.qty * line.pu) > 1000)){

          return true;
        }
        return false;
      };

      $scope.addArticle = function(){
        var copy = angular.copy($scope.selectedItem);
          copy.qty = 1;
          $scope.articles.push(copy);
          $scope.selectedItem = {};
      }

      $scope.deleteArticle = function(article){
        var idx = $scope.articles.indexOf(article);
        if(idx>-1){

          $scope.articles.splice(idx,1);
        }
      }

      $http.get("https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i").
          success(function(data, status, headers, config) {
            $scope.books = data;
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

}]);