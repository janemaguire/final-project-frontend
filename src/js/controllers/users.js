angular.module('finalProject')
  .controller('UsersIndexController', UsersIndexController)
  .controller('UsersShowController', UsersShowController)
  .controller('UsersEditController', UsersEditController);


UsersIndexController.$inject = ['User'];
function UsersIndexController(User) {
  const usersIndex = this;

  usersIndex.queryString = '';

  function filter(user) {
    const regex = new RegExp(usersIndex.queryString, 'i');

    return regex.test(user.username);
  }

  usersIndex.filter = filter;
  usersIndex.all = User.query();
}





UsersShowController.$inject = ['User', '$state', '$auth'];
function UsersShowController(User, $state, $auth) {
  const usersShow = this;

  function isCurrentUser() {
    return $auth.getPayload().id === Number($state.params.id);
  }

  usersShow.isCurrentUser = isCurrentUser;

  usersShow.user = User.get($state.params);


  function deleteUser() {
    usersShow.user.$remove(() => {
      $state.go('usersIndex');
    });
  }

  usersShow.delete = deleteUser;
}

UsersEditController.$inject = ['User', '$state'];
function UsersEditController(User, $state) {
  const usersEdit = this;

  usersEdit.user = User.get($state.params);

  function updateUser() {
    usersEdit.user.$update(() => {
      $state.go('usersShow', $state.params);
    });
  }
  usersEdit.update = updateUser;
}
