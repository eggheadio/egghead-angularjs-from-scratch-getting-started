angular.module('eggly.models.categories', [

])
  .service('categories', function CategoriesService($http, $q) {
    var URLS = {
        FETCH: 'data/categories.json'
      },
      categories,
      currentCategory,
      categoriesModel = this;

    function extract(result) {
      return result.data;
    }

    function cacheCategories(result) {
      categories = extract(result);
      return categories;
    }

    categoriesModel.getCategories = function () {
      return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
    };

    categoriesModel.getCurrentCategory = function () {
      return currentCategory;
    };

    categoriesModel.getCurrentCategoryName = function () {
      return currentCategory ? currentCategory.name : '';
    };

    categoriesModel.setCurrentCategory = function (category) {
      currentCategory = category;
      return currentCategory;
    };

    categoriesModel.createCategory = function (category) {
      category.id = categories.length;
      categories.push(category);
    };

    categoriesModel.deleteCategory = function (category) {
      _.remove(categories, function (c) {
        return c.id == category.id;
      });
    };

    categoriesModel.getCategoryByName = function (categoryName) {
      var deferred = $q.defer();

      function findCategory() {
        return _.find(categories, function (c) {
          return c.name == categoryName;
        })
      }

      if (categories) {
        deferred.resolve(findCategory());
      } else {
        categoriesModel.getCategories().then(function () {
          deferred.resolve(findCategory());
        })
      }

      return deferred.promise;
    };

  })
;
