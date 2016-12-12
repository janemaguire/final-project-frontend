angular.module('finalProject')
  .controller('CategoriesIndexController', CategoriesIndexController)
  .controller('CategoriesShowController', CategoriesShowController)
  .controller('CategoriesEditController', CategoriesEditController);

CategoriesIndexController.$inject = ['Category'];
function CategoriesIndexController(Category) {
  const categoriesIndex = this;

  categoriesIndex.all = Category.query();
}

CategoriesShowController.$inject = ['Category', '$state'];
function CategoriesShowController(Category, $state) {
  const categoriesShow = this;

  categoriesShow.category = Category.get($state.params);

  function deleteCategory() {
    categoriesShow.category.$remove(() => {
      $state.go('categoriesIndex');
    });
  }

  categoriesShow.delete = deleteCategory;
}

CategoriesEditController.$inject = ['Category', '$state'];
function CategoriesEditController(Category, $state) {
  const categoriesEdit = this;

  categoriesEdit.category = Category.get($state.params);

  function updateCategory() {
    categoriesEdit.category.$update(() => {
      $state.go('categoriesShow', $state.params);
    });
  }
  categoriesEdit.update = updateCategory;
}
