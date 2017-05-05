angular.module('parksApp')
.controller('parksCtrl',function($scope, parkService){

$scope.getNextQuote =function(){
  parkService.getNextQuote().then(function(response){
    console.log(response.data)
    $scope.quotes=response.data[0]
  })
}
$scope.getNextQuote()
})
