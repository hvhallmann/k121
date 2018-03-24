'use strict';

angular.
  module('core.people').
  factory('People', ['$resource',
    function($resource) {
      var resourceList = $resource('https://secret-santa-nb.herokuapp.com/person/list', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });

      var resourceItem = function(params) {
        return $resource('https://secret-santa-nb.herokuapp.com/person/list/' + params._id);
      }

      var updateResource = $resource('https://secret-santa-nb.herokuapp.com/person/update/:id', {}, {
        update: {
          method: "PUT",
        }
      });

      var deleteResource = $resource('https://secret-santa-nb.herokuapp.com/person/delete/:id', {}, {
        update: {
          method: "DELETE",
        }
      });

      var insertResource = $resource('https://secret-santa-nb.herokuapp.com/person/create', {}, {
        save: {
          method: "POST",
        }
      });

      var sendResource = $resource('https://secret-santa-nb.herokuapp.com/people/send-emails', {}, {
        save: {
          method: "POST",
        }
      });

      return {
        resourceList,
        resourceItem,
        updateResource,
        deleteResource,
        insertResource,
        sendResource
      }
    }
  ]);
