angular.module('finalProject')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/templates/usersIndex.html',
      controller: 'UsersIndexController as usersIndex'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/templates/usersShow.html',
      controller: 'UsersShowController as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/templates/usersEdit.html',
      controller: 'UsersEditController as usersEdit'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    })
    .state('propsIndex', {
      url: '/props',
      templateUrl: '/templates/propsIndex.html',
      controller: 'PropsIndexController as propsIndex'
    })
    .state('propsNew', {
      url: '/props/new',
      templateUrl: '/templates/propsNew.html',
      controller: 'PropsNewController as propsNew'
    })
    .state('propsShow', {
      url: '/props/:id',
      templateUrl: '/templates/propsShow.html',
      controller: 'PropsShowController as propsShow'
    })
    .state('propsEdit', {
      url: '/props/:id/edit',
      templateUrl: '/templates/propsEdit.html',
      controller: 'PropsEditController as propsEdit'
    })
    .state('categoriesIndex', {
      url: '/categories',
      templateUrl: '/templates/categoriesIndex.html',
      controller: 'CategoriesIndexController as categoriesIndex'
    })
    .state('categoriesShow', {
      url: '/categories/:id',
      templateUrl: '/templates/categoriesShow.html',
      controller: 'CategoriesShowController as categoriesShow'
    });

  $urlRouterProvider.otherwise('/users');
}
