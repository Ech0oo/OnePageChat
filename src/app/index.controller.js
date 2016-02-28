(function() {
  'use strict';

  angular
    .module('appChat')
    .controller('chatCtrl', chatCtrl);

  function chatCtrl(messagesService, $interval, $location, $anchorScroll, $timeout) {
    var vm = this,
        messagesData,
        chatOwner = "Iam";

      //remove comments for use auto get message
//    $interval(repeatGetMesages, 3000);

//    function repeatGetMesages() {
      messagesService.getMessages().then(function(response) {
        vm.messagesData = response.data;
      });
//    }



    vm.sendMessage = sendMessage;
    function sendMessage(textMessage) {
      console.log(textMessage);
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
        return "yours"
      }

      return userName;
    }

    // the number limit of messages on the screen
    vm.messagesLimit = 10;



    // go to the bottom of mesages screen
    $timeout(function() {
      $location.hash('bottom');
      $anchorScroll();
    })
  }
}());
