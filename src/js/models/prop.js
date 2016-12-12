angular.module('finalProject')
  .factory('Prop', Prop);

Prop.$inject = ['$resource', 'API_URL'];
function Prop($resource, API_URL) {
  return new $resource(`${API_URL}/props/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
