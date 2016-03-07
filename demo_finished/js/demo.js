// Models are JSON Objects
// We can Output the model directly
// pre and to_json for debugging
// Use ng-repeat to loop over them
// orderBy
// filter
// reverse

angular.module('app', [])
  .controller('catController', function($scope, $http) {

    $scope.search = {}

    $scope.thundercats = [
      {
        name: "Cheetara",
        specialSkill: "speed",
        planet: "Thundera",
        image: "images/cheetara.jpg"
      },
      {
        name: "Lion-O",
        specialSkill: "Sword of Omens",
        planet: "Thundera",
        image: "images/lion-o.jpg"
      },
      {
        name: "Panthro",
        specialSkill: "Mechanical Engineering",
        planet: "Thundera",
        image: "images/panthro.jpg"
      },
      {
        name: "Jaga the Wise",
        specialSkill: "Wisdom",
        planet: "Thundera",
        image: "images/jaga.jpg"
      },
      {
        name: "Snarf",
        specialSkill: "Annoyance",
        planet: "Thundera",
        image: "images/snarf.jpg"
      },
      {
        name: "Robear Berbil",
        specialSkill: "Farming",
        planet: "Ro-Bear",
        image: "images/berbils.jpg"
      }
    ];

  })




// $scope.inspectScope = function() {
//   $scope;
// }












// $scope.thundercats = [
//   {
//     name: "Cheetara",
//     specialSkill: "speed",
//     planet: "Thundera",
//     image: "images/cheetara.jpg"
//   },
//   {
//     name: "Lion-O",
//     specialSkill: "Sword of Omens",
//     planet: "Thundera",
//     image: "images/lion-o.jpg"
//   },
//   {
//     name: "Panthro",
//     specialSkill: "Mechanical Engineering",
//     planet: "Thundera",
//     image: "images/panthro.jpg"
//   },
//   {
//     name: "Jaga the Wise",
//     specialSkill: "Wisdom",
//     planet: "Thundera",
//     image: "images/jaga.jpg"
//   },
//   {
//     name: "Snarf",
//     specialSkill: "Annoyance",
//     planet: "Thundera",
//     image: "images/snarf.jpg"
//   },
//   {
//     name: "Robear Berbil",
//     specialSkill: "Farming",
//     planet: "Ro-Bear",
//     image: "images/berbils.jpg"
//   }
// ];

// Initial state
// angular.module('app', [])
//   .controller('catController', function($scope) {

//   });

 // $scope.inspectScope = function() {
    //   $scope;
    // }
