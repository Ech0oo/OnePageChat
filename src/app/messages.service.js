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

  function messagesService($http, $q) {
    this.getMessages = function () {
      return $http.get('api/realServer');
    };

    this.sendMessage = function (timeStamp, textMessage, userName) {
      $http.get('https://www.your-website.com/api/users.json', {
        params:  {timestamp: timeStamp, msg: textMessage, username: userName}
      }
        );
    };
  }



    function messagesServiceMock($http, $q) {
      var messagesData = [];

      this.getMessages = function () {
        console.log('getService');
           return $http.get('app/messages.mock.json').then(successCallbackGet, errorCallback);
      };

      this.sendMessage = function (timeStamp, textMessage, userName) {
        $http.get('http://api/message/send', {
            params:  {timestamp: timeStamp, msg: textMessage, username: userName}
        });
      };



      function successCallbackGet(response) {
        var responseDataArr,
            i,
            n;

        responseDataArr = response.data;
        for (n = responseDataArr.length, i = 0; i < n; i += 1) {
          messagesData.push(responseDataArr[i]);
        }
        
        return messagesData;
      }

      function errorCallback(response) {
        return "Error: " + response.status + " " + response.statusText;
      }

    }

}());
