angular.module('Eggly', [
  'ngAnimate',
  'ui.router',
  'categories',
  'bookmarks'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('eggly', {
        url: '',
        abstract: true
      })
    ;
    $urlRouterProvider.otherwise('/');
  })

;