(function () {
  angular.module('WebLanani.producto')
    .controller('ProductoCtrl', ['productoFact', function (productoFact) {
      var vm = this,
          flag = false;

      vm.producto = {nombre: '', descripcion: ''};

      if (flag) {
        productoFact.putProducto().then(function (rs) {
          vm.producto = rs;
        });
      } else {
        productoFact.getProducto().then(function (rs) {
          vm.producto = rs;
        });
      }
    }]);
})();
