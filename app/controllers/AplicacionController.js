'use strict';

(function () {
  var controlador = angular.module('app-controller',[]);
  
  controlador.controller('applicationController', ['$scope', function($scope){
  

    $scope.menu='app/views/inicio.html';
    $scope.nuevoCliente='app/views/nuevoCliente.html';
    
    
    $scope.setMenu= function (menu) {
      $scope.menu='app/views/'+menu+'.html';
    };
    
    $scope.isMenu= function (menu) {
      return $scope.menu==='app/views/'+menu+'.html';
    };
  }]);
  

})();