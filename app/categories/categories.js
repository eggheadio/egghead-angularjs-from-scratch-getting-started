angular.module('categories', [
  'eggly.models.categories'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('eggly.categories', {
        url: '/',
        views: {
          'categories@': {
            controller: 'CategoriesCtrl',
            templateUrl: 'app/categories/categories.tmpl.html'
          },
          'bookmarks@': {
            controller: 'BookmarksCtrl',
            templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
          }
        }
      });
  })

  .controller('CategoriesCtrl', function CategoriesCtrl($scope, categories) {
    $scope.getCurrentCategoryName = categories.getCurrentCategoryName;

    categories.getCategories()
      .then(function (result) {
        $scope.categories = result;
      });

    $scope.isCurrentCategory = function (category) {
      return category.name === $scope.getCurrentCategoryName();
    }
  })
;