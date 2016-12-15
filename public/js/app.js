"use strict";function Auth(e,r){e.loginUrl=r+"/login",e.signupUrl=r+"/register",e.tokenPrefix=""}function RegisterController(e,r,t){function o(){e.signup(n.user).then(function(){r.go("login")})}var n=this;if(n.user={},t.isLoggedIn=e.isAuthenticated,t.isLoggedIn()){var l=e.getPayload().id;r.go("usersShow",{id:l})}n.submit=o}function LoginController(e,r){function t(){e.login(o.credentials).then(function(){r.go("usersIndex")})}var o=this;o.credentials={},o.submit=t}function CategoriesIndexController(e){var r=this;r.all=e.query()}function CategoriesShowController(e,r){function t(){o.category.$remove(function(){r.go("categoriesIndex")})}var o=this;o.category=e.get(r.params),o.delete=t}function CategoriesEditController(e,r){function t(){o.category.$update(function(){r.go("categoriesShow",r.params)})}var o=this;o.category=e.get(r.params),o.update=t}function Category(e,r){return new e(r+"/categories/:id",{id:"@id"},{update:{method:"PUT"}})}function dragDrop(){var e=new FileReader;return{restrict:"E",replace:!0,templateUrl:"templates/dragDrop.html",scope:{base64:"="},link:function(r,t){r.base64=null,r.active=!1,e.onload=function(){r.base64=e.result,r.$apply()},t.on("dragover",function(){r.active=!0,r.$apply()}).on("dragover",function(e){e.preventDefault()}).on("dragleave",function(){r.active=!1,r.$apply()}).on("drop",function(r){r.preventDefault();var t=(r.target.files||r.dataTransfer.files)[0];e.readAsDataURL(t)})}}}function MainController(e,r,t,o){function n(){e.logout().then(function(){r.go("usersIndex")})}function l(t,o,n){s.message=null,(!e.isAuthenticated()&&a.includes(o.name)||"usersEdit"===o.name&&parseFloat(n.id)!==e.getPayload().id)&&(t.preventDefault(),r.go("login"),s.message="You must be logged in to go there")}var s=this;s.isLoggedIn=e.isAuthenticated,s.message=null;var a=["usersEdit","propsNew","propsEdit"];if(e.isAuthenticated()){var i=e.getPayload().id;s.currentUser=o.get({id:i})}t.$on("$stateChangeStart",l),s.logout=n}function googleMap(e){return{restrict:"E",replace:!0,template:'<div class="google-map"></div>',scope:{user:"="},link:function(r,t){r.$watch("user",function(){var o=new e.google.maps.LatLng(r.user.latitude,r.user.longitude),n=new e.google.maps.Map(t[0],{center:o,zoom:13,styles:[{featureType:"all",elementType:"all",stylers:[{saturation:-100},{gamma:.5}]}],scrollwheel:!1});new e.google.maps.Marker({position:o,map:n,animation:e.google.maps.Animation.DROP})})}}}function Prop(e,r){return new e(r+"/props/:id",{id:"@id"},{update:{method:"PUT"}})}function PropsIndexController(e){function r(e){var r=new RegExp(t.queryString,"i");return r.test(e.name)||r.test(e.description)||r.test(e.category)}var t=this;t.queryString="",t.filter=r,t.all=e.query()}function PropsNewController(e,r,t,o){function n(){e.save(s.prop,function(e){r.go("propsShow",{id:e.id})})}function l(e){var r=s.prop.category_ids.indexOf(e);r>-1?s.prop.category_ids.splice(r,1):s.prop.category_ids.push(e)}t.isAuthenticated||r.go("propsIndex");var s=this;s.categories=o.query(),s.prop={},s.create=n,s.toggleSelection=l}function PropsShowController(e,r,t){function o(){return t.isAuthenticated()&&l.prop.$resolved&&t.getPayload().id===l.prop.user.id}function n(){l.prop.$remove(function(){r.go("propsIndex")})}var l=this;l.isCurrentUser=o,l.prop=e.get(r.params),l.delete=n}function PropsEditController(e,r,t,o){function n(){s.prop.$update(function(){r.go("propsShow",r.params)})}function l(e){var r=s.prop.category_ids.indexOf(e);r>-1?s.prop.category_ids.splice(r,1):s.prop.category_ids.push(e)}var s=this;s.categories=t.query(),e.get(r.params).$promise.then(function(e){s.prop=e,s.prop.user.id!==o.getPayload().id&&r.go("propsIndex")}),s.update=n,s.toggleSelection=l}function Router(e,r){e.state("usersIndex",{url:"/users",templateUrl:"/templates/usersIndex.html",controller:"UsersIndexController as usersIndex"}).state("usersShow",{url:"/users/:id",templateUrl:"/templates/usersShow.html",controller:"UsersShowController as usersShow"}).state("usersEdit",{url:"/users/:id/edit",templateUrl:"/templates/usersEdit.html",controller:"UsersEditController as usersEdit"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("propsIndex",{url:"/props",templateUrl:"/templates/propsIndex.html",controller:"PropsIndexController as propsIndex"}).state("propsNew",{url:"/props/new",templateUrl:"/templates/propsNew.html",controller:"PropsNewController as propsNew"}).state("propsShow",{url:"/props/:id",templateUrl:"/templates/propsShow.html",controller:"PropsShowController as propsShow"}).state("propsEdit",{url:"/props/:id/edit",templateUrl:"/templates/propsEdit.html",controller:"PropsEditController as propsEdit"}).state("categoriesIndex",{url:"/categories",templateUrl:"/templates/categoriesIndex.html",controller:"CategoriesIndexController as categoriesIndex"}).state("categoriesShow",{url:"/categories/:id",templateUrl:"/templates/categoriesShow.html",controller:"CategoriesShowController as categoriesShow"}),r.otherwise("/users")}function User(e,r){return new e(r+"/users/:id",{id:"@id"},{update:{method:"PUT"}})}function UsersIndexController(e){function r(e){var r=new RegExp(t.queryString,"i");return r.test(e.username)}var t=this;t.queryString="",t.filter=r,t.all=e.query()}function UsersShowController(e,r,t){function o(){return t.getPayload().id===Number(r.params.id)}function n(){l.user.$remove(function(){r.go("usersIndex")})}var l=this;l.isCurrentUser=o,l.user=e.get(r.params),l.delete=n}function UsersEditController(e,r){function t(){o.user.$update(function(){r.go("usersShow",r.params)})}var o=this;o.user=e.get(r.params),o.update=t}angular.module("finalProject",["ngResource","ui.router","satellizer"]).constant("API_URL","http://localhost:3000/api").config(Auth),Auth.$inject=["$authProvider","API_URL"],angular.module("finalProject").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state","User"],LoginController.$inject=["$auth","$state"],angular.module("finalProject").controller("CategoriesIndexController",CategoriesIndexController).controller("CategoriesShowController",CategoriesShowController).controller("CategoriesEditController",CategoriesEditController),CategoriesIndexController.$inject=["Category"],CategoriesShowController.$inject=["Category","$state"],CategoriesEditController.$inject=["Category","$state"],angular.module("finalProject").factory("Category",Category),Category.$inject=["$resource","API_URL"],angular.module("finalProject").directive("dragDrop",dragDrop),angular.module("finalProject").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope","User"],angular.module("finalProject").directive("googleMap",googleMap),googleMap.$inject=["$window"],angular.module("finalProject").factory("Prop",Prop),Prop.$inject=["$resource","API_URL"],angular.module("finalProject").controller("PropsIndexController",PropsIndexController).controller("PropsShowController",PropsShowController).controller("PropsEditController",PropsEditController).controller("PropsNewController",PropsNewController),PropsIndexController.$inject=["Prop"],PropsNewController.$inject=["Prop","$state","$auth","Category"],PropsShowController.$inject=["Prop","$state","$auth"],PropsEditController.$inject=["Prop","$state","Category","$auth"],angular.module("finalProject").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("finalProject").factory("User",User),User.$inject=["$resource","API_URL"],angular.module("finalProject").controller("UsersIndexController",UsersIndexController).controller("UsersShowController",UsersShowController).controller("UsersEditController",UsersEditController),UsersIndexController.$inject=["User"],UsersShowController.$inject=["User","$state","$auth"],UsersEditController.$inject=["User","$state"];
//# sourceMappingURL=app.js.map
