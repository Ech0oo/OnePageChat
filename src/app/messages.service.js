(function () {
  'use strict';

  angular
    .module('appChat')
    .service('messagesService', messagesService)
    .service('messagesServiceMock', messagesServiceMock)
    .config(function ($provide) {
      $provide.decorator('messagesService', function ($delegate, messagesServiceMock) {
        $delegate = messagesServiceMock;
        return $delegate;
      });
    });

  function messagesService($http) {
    this.getMessages = function () {
      return $http.get('api/realServer');
    };
  }

  function messagesServiceMock($http) {
    this.getMessages = function () {
      return $http.get('app/messages.mock.json');
    };
  }


}());
