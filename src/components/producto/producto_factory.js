(function () {
  angular.module('WebLanani.producto')
    .factory('productoFact', ['$http', '$q', function ($http, $q) {
    return {
      getProducto: getProducto,
      putProducto: putProducto
    };

    function getProducto() {
      var deferred = $q.defer();
      $http.get('/catalogo/producto').success(function(req) {
        deferred.resolve(req);
      }).error(function(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    }

    function putProducto() {
      var deferred = $q.defer();
      $http.post('/catalogo/producto').success(function(req) {
        deferred.resolve(req);
      }).error(function(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    }
  }]);
})();
