angular.module('parksApp')
.service('parkService',function($http){



  this.getNextQuote=function(){
    return $http({
      method:'GET',
      url:'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
    });
  }
});
