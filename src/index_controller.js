(function () {
	angular.module('WebLanani')
		.controller('AppCtrl', function () {
			var vm = this;
			vm.navBar = {
				selected : null
			}
			vm.setNavBar = function(data) {
				vm.navBar.selected = data;
			};
		});
})();
