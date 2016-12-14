angular.module('finalProject')
.directive('googleMap', googleMap);

googleMap.$inject = ['$window'];
function googleMap($window) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      user: '='
    },
    link: function($scope, element) {
      $scope.$watch('user', () => {
        const myLatlng = new $window.google.maps.LatLng($scope.user.latitude, $scope.user.longitude);
        const map = new $window.google.maps.Map(element[0], {
          center: myLatlng,
          zoom: 13,
          scrollwheel: false
        });
        new $window.google.maps.Marker({
          position: myLatlng,
          map: map,
          animation: $window.google.maps.Animation.DROP
        });
      });


      // let markers = [];
      // function clearMarkers() {
      //   markers.forEach((marker) => {
      //     marker.setMap(null);
      //   });
      //   markers = [];
      // }

      // $scope.$watch('spaces', () => {
      //   clearMarkers();
      //   if($scope.spaces.$resolved) {
      //     $scope.spaces.forEach((space) => {
      //       // console.log(space);
      //       if(space.lat && space.lng) {
              // const marker = new $window.google.maps.Marker({
              //   position: myLatlng,
              //   map: map,
              //   animation: $window.google.maps.Animation.DROP
              // });
      //         markers.push(marker);
      //         marker.addListener('click', () => {
      //           // console.log(space);
      //           const contentString = `
      //           <img src=${space.image}>
      //           <p>Contact: ${space.user.email}</p>`;
      //
      //           const infoWindow = new $window.google.maps.InfoWindow({
      //             content: contentString
      //           });
      //           infoWindow.open(map, marker);
      //           console.log('oi, that hurt');
      //         });
      //       }
      //     });
      //   }
      // }, true);
    }
  };
}
