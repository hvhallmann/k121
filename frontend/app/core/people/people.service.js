'use strict';

angular.
  module('core.people').
  factory('People', ['$resource',
    function($resource) {
      var resourceList = $resource('http://localhost:3000/person/list', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });

      var resourceItem = function(params) {
        return $resource('http://localhost:3000/person/list/' + params._id);
      }

      var updateResource = $resource('http://localhost:3000/person/update/:id', {}, {
        update: {
          method: "PUT",
        }
      });

      var deleteResource = $resource('http://localhost:3000/person/delete/:id', {}, {
        update: {
          method: "DELETE",
        }
      });

      var insertResource = $resource('http://localhost:3000/person/create', {}, {
        save: {
          method: "POST",
        }
      });

      var sendResource = $resource('http://localhost:3000/people/send-emails', {}, {
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
