angular.module('finalProject')
  .controller('PropsIndexController', PropsIndexController)
  .controller('PropsShowController', PropsShowController)
  .controller('PropsEditController', PropsEditController);

PropsIndexController.$inject = ['Prop'];
function PropsIndexController(Prop) {
  const propsIndex = this;

  propsIndex.all = Prop.query();
}

PropsShowController.$inject = ['Prop', '$state', '$auth'];
function PropsShowController(Prop, $state, $auth) {
  const propsShow = this;

  function isCurrentUser() {
    console.log('isCurrentUser?', $auth.getPayload().id === Number($state.params.id));
    return $auth.getPayload().id === Number($state.params.id);
  }

  propsShow.isCurrentUser = isCurrentUser;

  propsShow.prop = Prop.get($state.params);

  function deleteProp() {
    propsShow.prop.$remove(() => {
      $state.go('propsIndex');
    });
  }

  propsShow.delete = deleteProp;
}

PropsEditController.$inject = ['Prop', '$state', 'Category'];
function PropsEditController(Prop, $state, Category) {
  const propsEdit = this;

  propsEdit.categories = Category.query();

  propsEdit.prop = Prop.get($state.params);

  function updateProp() {
    propsEdit.prop.$update(() => {
      $state.go('propsShow', $state.params);
    });
  }

  function toggleSelection(id) {
    var index = propsEdit.prop.category_ids.indexOf(id);
    if (index > -1) { // is currently selected
      propsEdit.prop.category_ids.splice(index, 1);
    } else { // is newly selected
      propsEdit.prop.category_ids.push(id);
    }
  }

  propsEdit.update = updateProp;
  propsEdit.toggleSelection = toggleSelection;
}
