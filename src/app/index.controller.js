(function() {
  'use strict';

  angular
    .module('appChat')
    .controller('chatCtrl', chatCtrl);

  function chatCtrl(messagesService, $interval, $location, $anchorScroll, $timeout) {
    var vm = this,
        messagesData,
        chatOwner = "Iam";

    // the number limit of messages on the screen
    vm.messagesLimit = 10;

   
    // Only for the test, delete after start autoGetMessages
    vm.repeatGetMesages = repeatGetMesages;
    function repeatGetMesages() {
      messagesService.getMessages().then(function(response) {
        vm.messagesData = response;
      });
    }
    // end only for the test.
    
    
    
    // Remove comments for use auto get messages
    // $interval(repeatGetMesages, 3000);
    // function repeatGetMesages() {
      messagesService.getMessages().then(function(response) {
        vm.messagesData = response;
      });
    // }
    // end remove comments.



    vm.sendMessage = sendMessage;
    
    function sendMessage(textMessage) {
      messagesService.sendMessage(new Date().getTime(), textMessage, chatOwner);
    }




    vm.setBubbleClass = setBubbleClass;
    vm.setNameClass = setNameClass;
    vm.setUserName = setUserName;

    function setBubbleClass(owner) {
      if (owner === chatOwner) {
        return "bubble owner";
      }

      return "bubble";
    }

    function setNameClass(owner) {
      if (owner === chatOwner) {
        return "brif-author owner";
      }

      return "brif-author";
    }

    function setUserName(userName) {
      if (userName === chatOwner) {
        return "yours";
      }

      return userName;
    }




    // go to the bottom of mesages screen
    $timeout(function() {
      $location.hash('bottom');
      $anchorScroll();
    });
  }
}());
