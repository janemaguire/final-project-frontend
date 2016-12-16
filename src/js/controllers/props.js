angular.module('finalProject')
  .controller('PropsIndexController', PropsIndexController)
  .controller('PropsShowController', PropsShowController)
  .controller('PropsEditController', PropsEditController)
  .controller('PropsNewController', PropsNewController);


PropsIndexController.$inject = ['Prop'];
function PropsIndexController(Prop){
  const propsIndex = this;

  propsIndex.queryString = '';

  function filter(prop) {
    const regex = new RegExp(propsIndex.queryString, 'i');

    return regex.test(prop.name) || regex.test(prop.description) || regex.test(prop.category);
  }

  propsIndex.filter = filter;
  propsIndex.all = Prop.query();
}



PropsNewController.$inject = ['Prop', '$state', '$auth', 'Category'];
function PropsNewController(Prop, $state, $auth, Category) {

  if(!$auth.isAuthenticated) {
    $state.go('propsIndex');
  }

  const propsNew = this;
  propsNew.categories = Category.query();
  propsNew.prop = {};

  function create() {
    Prop.save(propsNew.prop, (prop) => {
      $state.go('propsShow', { id: prop.id });
    });
  }

  function toggleSelection(id) {
    propsNew.prop.category_ids = propsNew.prop.category_ids || [];
    var index = propsNew.prop.category_ids.indexOf(id);
    if (index > -1) { // is currently selected
      propsNew.prop.category_ids.splice(index, 1);
    } else { // is newly selected
      propsNew.prop.category_ids.push(id);
    }
  }

  propsNew.create = create;
  propsNew.toggleSelection = toggleSelection;
}

PropsShowController.$inject = ['Prop', '$state', '$auth'];
function PropsShowController(Prop, $state, $auth) {
  const propsShow = this;

  function isCurrentUser() {
    return $auth.isAuthenticated() && propsShow.prop.$resolved && $auth.getPayload().id === propsShow.prop.user.id;
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

PropsEditController.$inject = ['Prop', '$state', 'Category', '$auth'];
function PropsEditController(Prop, $state, Category, $auth) {
  const propsEdit = this;

  propsEdit.categories = Category.query();

  Prop.get($state.params).$promise.then((prop) => {
    propsEdit.prop = prop;

    if(propsEdit.prop.user.id !== $auth.getPayload().id) {
      $state.go('propsIndex');
    }

  });

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
