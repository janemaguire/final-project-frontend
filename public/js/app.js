"use strict";function Auth(e,r){e.loginUrl=r+"/login",e.signupUrl=r+"/register",e.tokenPrefix=""}function RegisterController(e,r){function t(){e.signup(o.user).then(function(){r.go("login")})}var o=this;o.user={},o.submit=t}function LoginController(e,r){function t(){e.login(o.credentials).then(function(){r.go("usersIndex")})}var o=this;o.credentials={},o.submit=t}function CategoriesIndexController(e){var r=this;r.all=e.query()}function CategoriesShowController(e,r){function t(){o.category.$remove(function(){r.go("categoriesIndex")})}var o=this;o.category=e.get(r.params),o.delete=t}function CategoriesEditController(e,r){function t(){o.category.$update(function(){r.go("categoriesShow",r.params)})}var o=this;o.category=e.get(r.params),o.update=t}function Category(e,r){return new e(r+"/categories/:id",{id:"@id"},{update:{method:"PUT"}})}function MainController(e,r,t,o){function l(){e.logout().then(function(){r.go("usersIndex")})}function n(t,l){if(s.message=null,!e.isAuthenticated()&&i.includes(l.name)&&(t.preventDefault(),r.go("login"),s.message="You must be logged in to go there"),e.isAuthenticated()){var n=e.getPayload().id;s.currentUser=o.get({id:n})}}var s=this;s.isLoggedIn=e.isAuthenticated,s.message=null;var i=["usersEdit"];t.$on("$stateChangeStart",n),s.logout=l}function Prop(e,r){return new e(r+"/props/:id",{id:"@id"},{update:{method:"PUT"}})}function PropsIndexController(e){var r=this;r.all=e.query()}function PropsShowController(e,r){function t(){o.prop.$remove(function(){r.go("propsIndex")})}var o=this;o.prop=e.get(r.params),o.delete=t}function PropsEditController(e,r){function t(){o.prop.$update(function(){r.go("propsShow",r.params)})}var o=this;o.prop=e.get(r.params),o.update=t}function Router(e,r){e.state("usersIndex",{url:"/users",templateUrl:"/templates/usersIndex.html",controller:"UsersIndexController as usersIndex"}).state("usersShow",{url:"/users/:id",templateUrl:"/templates/usersShow.html",controller:"UsersShowController as usersShow"}).state("usersEdit",{url:"/users/:id/edit",templateUrl:"/templates/usersEdit.html",controller:"UsersEditController as usersEdit"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("propsIndex",{url:"/props",templateUrl:"/templates/propsIndex.html",controller:"PropsIndexController as propsIndex"}).state("propsShow",{url:"/props/:id",templateUrl:"/templates/propsShow.html",controller:"PropsShowController as propsShow"}).state("propsEdit",{url:"/props/:id/edit",templateUrl:"/templates/propsEdit.html",controller:"PropsEditController as propsEdit"}).state("categoriesIndex",{url:"/categories",templateUrl:"/templates/categoriesIndex.html",controller:"CategoriesIndexController as categoriesIndex"}).state("categoriesShow",{url:"/categories/:id",templateUrl:"/templates/categoriesShow.html",controller:"CategoriesShowController as categoriesShow"}),r.otherwise("/users")}function User(e,r){return new e(r+"/users/:id",{id:"@id"},{update:{method:"PUT"}})}function UsersIndexController(e){var r=this;r.all=e.query()}function UsersShowController(e,r){function t(){o.user.$remove(function(){r.go("usersIndex")})}var o=this;o.user=e.get(r.params),o.delete=t}function UsersEditController(e,r){function t(){o.user.$update(function(){r.go("usersShow",r.params)})}var o=this;o.user=e.get(r.params),o.update=t}angular.module("finalProject",["ngResource","ui.router","satellizer"]).constant("API_URL","http://localhost:3000/api").config(Auth),Auth.$inject=["$authProvider","API_URL"],angular.module("finalProject").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("finalProject").controller("CategoriesIndexController",CategoriesIndexController).controller("CategoriesShowController",CategoriesShowController).controller("CategoriesEditController",CategoriesEditController),CategoriesIndexController.$inject=["Category"],CategoriesShowController.$inject=["Category","$state"],CategoriesEditController.$inject=["Category","$state"],angular.module("finalProject").factory("Category",Category),Category.$inject=["$resource","API_URL"],angular.module("finalProject").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope","User"],angular.module("finalProject").factory("Prop",Prop),Prop.$inject=["$resource","API_URL"],angular.module("finalProject").controller("PropsIndexController",PropsIndexController).controller("PropsShowController",PropsShowController).controller("PropsEditController",PropsEditController),PropsIndexController.$inject=["Prop"],PropsShowController.$inject=["Prop","$state"],PropsEditController.$inject=["Prop","$state"],angular.module("finalProject").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("finalProject").factory("User",User),User.$inject=["$resource","API_URL"],angular.module("finalProject").controller("UsersIndexController",UsersIndexController).controller("UsersShowController",UsersShowController).controller("UsersEditController",UsersEditController),UsersIndexController.$inject=["User"],UsersShowController.$inject=["User","$state"],UsersEditController.$inject=["User","$state"];
//# sourceMappingURL=app.js.map
