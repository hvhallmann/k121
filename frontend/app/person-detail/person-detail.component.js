'use strict';

angular.
  module('personDetail').
  component('personDetail', {
    templateUrl: 'person-detail/person-detail.template.html',
    controller: ['$routeParams', 'People', '$scope', '$window',
      function PersonDetailController($routeParams, Person, $scope, $window) {
        var self = this;
        self.updateMode = false;
        if ($routeParams.personId !== 'new-user') {
          self.updateMode = true;
          Person.resourceItem({_id: $routeParams.personId}).query(function(item) {
            self.person = item[0];
          });
        }

        $scope.save = function(personId) {
          if (self.updateMode) {
            Person.updateResource.update({id: personId}, { name: $scope.person.name, email: $scope.person.email }, function() {
              $window.location.href = ''; //redirect to home
            });
          } else {
            console.log('going to insert', $scope.person);
            Person.insertResource.save({ name: $scope.person.name, email: $scope.person.email }, function() {
              $window.location.href = ''; //redirect to home
            });
          }
        }
      }
    ]
  });
