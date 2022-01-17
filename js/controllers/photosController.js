app.controller('photosController', ['$scope', '$http',
function($scope, $http) {

  $scope.livePhotos = ["/img/DSC06039-2.jpg",
                      "/img/DSC06119-2.jpg",
                      "/img/_DSC3120-2.jpg",
                      "/img/DSC06240-2.jpg",
                      "/img/_DSC3094-2.jpg",
                      "/img/texas-mist.png" ];

  $scope.bandPhotos = ["/img/dizzy-selfie.jpg",
                      "/img/rehearsal-drums.jpg",
                      "/img/acoustic-jamsesh.jpg",
                      "/img/DBPic.jpg",
                      "/img/LostWell.jpg",
                      "/img/PointDB.jpg",
                      "/img/DBSquares.jpg",
                      "/img/JimiStudio.jpg",
                      "/img/RJMStudio2.jpg",
                      "/img/KyleStudio.jpg",
                      "/img/JamRoom.jpg",
                      "/img/RJMStudio.jpg",
                      "/img/KyleStudio2.png",
                      "/img/RecordingStation.jpg"];



  // -- MAIN METHODS -- // ----------------------------------------
  console.log($scope.bandPhotos[0]);





}]);
// End of photosController scope
scrollToTop();
