angular.module('categories.bookmarks.edit', [
  'eggly.models.bookmarks'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('eggly.categories.bookmarks.edit', {
        url: '/bookmarks/:bookmarkId/edit',
        views: {
          '@eggly.categories.bookmarks': {
            templateUrl: 'app/categories/bookmarks/edit/edit.bookmark.tmpl.html',
            controller: 'EditBookmarkCtrl'
          }
        }
      })
    ;
  })

  .controller('EditBookmarkCtrl', function ($scope, bookmarks, $stateParams, $state) {
    $scope.isEditing = false;

    function returnToBookmarks() {
      $state.go('eggly.categories.bookmarks', {
        category: $stateParams.category
      })
    }

    bookmarks.getBookmarkById($stateParams.bookmarkId).then(function (bookmark) {
      if (bookmark) {
        $scope.isEditing = true;
        $scope.bookmark = bookmark;
        $scope.editedBookmark = angular.copy($scope.bookmark);
      } else {
        returnToBookmarks();
      }
    });

    function toggleEditing() {
      $scope.isEditing = !$scope.isEditing;
    }

    function updateBookmark() {
      $scope.bookmark = angular.copy($scope.editedBookmark);
      bookmarks.updateBookmark($scope.editedBookmark);
      returnToBookmarks();
    }

    function cancelEditing() {
      $scope.isEditing = false;
      returnToBookmarks();
    }

    $scope.toggleEditing = toggleEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.updateBookmark = updateBookmark;
  })

;
