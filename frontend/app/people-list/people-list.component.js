'use strict';

// Register `peopleList` component, along with its associated controller and template
angular.
  module('peopleList').
  component('peopleList', {
    templateUrl: 'people-list/people-list.template.html',
    controller: ['People', '$scope', '$window',
      function PeopleListController(People, $scope, $window) {
        this.people = People.resourceList.query();
        
        $scope.deleteUser = function(personId) {
          People.deleteResource.delete(personId, function() {
            $window.location.href = ''; //redirect to home
          });
        };

        $scope.sendMails = function() {
          People.sendResource.save(undefined, function() {
            $window.location.href = '';
          });
        }
      }

    ]
  });
