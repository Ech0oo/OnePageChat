(function() {
  'use strict';

  angular
    .module('appChat')
    .controller('chatCtrl', chatCtrl);

  function chatCtrl(messagesService, $interval) {
    var vm = this,
        messagesData;

      //remove comments for use auto get message
//    $interval(repeatGetMesages, 3000);

//    function repeatGetMesages() {
      messagesService.getMessages().then(function(response) {
        vm.messagesData = response.data;
      });
//    }



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

  }
}());
