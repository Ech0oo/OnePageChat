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

    this.sendMessage = function (textMessage) {
      $http.get('https://www.your-website.com/api/users.json', {
        params:  {message: 'textMessage', time: 'timeStamp'}
      }
        );
    };
  }



    function messagesServiceMock($http) {
      this.getMessages = function () {
        return $http.get('app/messages.mock.json');
      };

      this.sendMessage = function (textMessage, timeStamp) {
        $http.get('https://www.your-website.com/api/users.json', {
            params:  {message: textMessage, time: timeStamp}
          }
        );
      };
    }

}());
