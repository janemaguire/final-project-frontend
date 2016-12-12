angular.module('finalProject')
  .controller('PropsIndexController', PropsIndexController)
  .controller('PropsShowController', PropsShowController)
  .controller('PropsEditController', PropsEditController);

PropsIndexController.$inject = ['Prop'];
function PropsIndexController(Prop) {
  const propsIndex = this;

  propsIndex.all = Prop.query();
}

PropsShowController.$inject = ['Prop', '$state'];
function PropsShowController(Prop, $state) {
  const propsShow = this;

  propsShow.prop = Prop.get($state.params);

  function deleteProp() {
    propsShow.prop.$remove(() => {
      $state.go('propsIndex');
    });
  }

  propsShow.delete = deleteProp;
}

PropsEditController.$inject = ['Prop', '$state'];
function PropsEditController(Prop, $state) {
  const propsEdit = this;

  propsEdit.prop = Prop.get($state.params);

  function updateProp() {
    propsEdit.prop.$update(() => {
      $state.go('propsShow', $state.params);
    });
  }
  propsEdit.update = updateProp;
}
