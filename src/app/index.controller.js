(function() {
  'use strict';

  angular
    .module('appChat')
    .controller('chatCtrl', chatCtrl);

  function chatCtrl() {
    var vm = this;

    vm.textForCheck = "some text";
  }

}());
