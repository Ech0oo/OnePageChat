(function() {
  'use strict';

  angular
    .module('appChat')
    .controller('chatCtrl', chatCtrl);

  function chatCtrl(messagesService, $interval, $location, $anchorScroll, $timeout) {
    var vm = this,
        messagesData;

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
      messagesService.sendMessage(textMessage, Date.now());
    }





    vm.setBubbleClass = setBubbleClass;
    vm.setNameClass = setNameClass;

    function setBubbleClass(owner) {
      if (owner === 'Iam') {
        return "bubble owner";
      }

      return "bubble";
    }

    function setNameClass(owner) {
      if (owner === 'Iam') {
        return "brif-author owner";
      }

      return "brif-author";
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
