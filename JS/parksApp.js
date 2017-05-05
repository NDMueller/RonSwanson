angular.module('parksApp',['ui.router'])


.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('wisdom', {
                url: '/wisdom',
                controller: 'parksCtrl',
                templateUrl: './views/wisdom.html'
            })
            .state('home', {
                url: '/',
                templateUrl: './views/home.html'
            })
            .state('calendar', {
              url:'/calendar',
              templateUrl: './views/cal.html'
            })
            .state('about',{
              url:'/about',
              templateUrl:'./views/about.html'
            })
        $urlRouterProvider
            .otherwise('/');
          });
