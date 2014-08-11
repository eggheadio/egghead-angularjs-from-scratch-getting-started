angular.module('Eggly', [

])
  .controller('MainCtrl', function ($scope) {
      $scope.categories = [
          {"id": 0, "name": "Development"},
          {"id": 1, "name": "Design"},
          {"id": 2, "name": "Exercise"},
          {"id": 3, "name": "Humor"}
      ];

      $scope.bookmarks = [
          {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
          {"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
          {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
          {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
          {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
          {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
          {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
          {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
          {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
      ];

      $scope.isCreating = false;
      $scope.isEditing = false;
      $scope.currentCategory = null;
      $scope.editedBookmark = null;

      function isCurrentCategory(category) {
          return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
      }

      function setCurrentCategory(category) {
          $scope.currentCategory = category;

          cancelCreating();
          cancelEditing();
      }

      $scope.isCurrentCategory = isCurrentCategory;
      $scope.setCurrentCategory = setCurrentCategory;

      function resetCreateForm() {
          $scope.newBookmark = {
              title: '',
              url: '',
              category: $scope.currentCategory
          };
      }

      //-------------------------------------------------------------------------------------------------
      // CRUD
      //-------------------------------------------------------------------------------------------------
      function createBookmark(bookmark) {
          bookmark.id = $scope.bookmarks.length;
          $scope.bookmarks.push(bookmark);

          resetCreateForm();
      }

      $scope.createBookmark = createBookmark;

      //-------------------------------------------------------------------------------------------------
      // CREATING AND EDITING STATES
      //-------------------------------------------------------------------------------------------------
      function shouldShowCreating() {
          return $scope.currentCategory && !$scope.isEditing;
      }

      function startCreating() {
          $scope.isCreating = true;
          $scope.isEditing = false;
          resetCreateForm();
      }

      function cancelCreating() {
          $scope.isCreating = false;
      }

      $scope.shouldShowCreating = shouldShowCreating;
      $scope.startCreating = startCreating;
      $scope.cancelCreating = cancelCreating;

      function shouldShowEditing() {
          return $scope.isEditing && !$scope.isCreating;
      }

      function startEditing() {
          $scope.isCreating = false;
          $scope.isEditing = true;
      }

      function cancelEditing() {
          $scope.isEditing = false;
          $scope.editedBookmark = null;
      }

      $scope.startEditing = startEditing;
      $scope.cancelEditing = cancelEditing;
      $scope.shouldShowEditing = shouldShowEditing;
  })
;