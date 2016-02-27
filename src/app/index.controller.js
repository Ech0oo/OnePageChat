(function() {
  'use strict';

  angular
    .module('appChat')
    .controller('chatCtrl', chatCtrl);

  function chatCtrl(messagesService) {
    var vm = this,
        messagesData;

    messagesService.getMessages().then(function(response) {
      vm.messagesData = response.data;
    });

    vm.textForCheck = "some text";
  }

}());
