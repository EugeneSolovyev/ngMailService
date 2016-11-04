/* === Initialization application === */
var app = angular.module('mailApp', ['ngRoute']);

app.directive('mail', function () {
    return {
        restrict: 'E',
        templateUrl: 'ngMail/tpl/mail.html'
    }
});

app.directive('mailHeader', function () {
    return {
        restrict: 'E',
        controller: 'UserControl',
        controllerAs: 'userCtrl',
        templateUrl: 'ngMail/tpl/mail-header.html'
    }
});

app.directive('mailBody', function () {
    return {
        restrict: 'E',
        controller: 'MailControl',
        controllerAs: 'mCtrl',
        templateUrl: 'ngMail/tpl/mail-body.html'
    }
});

app.directive('mailFooter', function () {
    return {
        restrict: 'E',
        templateUrl: 'ngMail/tpl/mail-footer.html'
    }
});

app.directive('userList', function() {
  	return {
	  restrict: 'E',
	  controller: 'UserControl',
	  controllerAs: 'userCtrl',
	  templateUrl: 'ngMail/tpl/nav.html'
	}
});

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/user-info', {
		templateUrl:'ngMail/tpl/user-info-tpl.html',
		controller: 'MailControl',
		controllerAs: 'mCtrl'
	})
	.when('/mail', {
		templateUrl: 'ngMail/tpl/mailbox.html'
	})
	.otherwise({
		redirectTo: 'ngMail/tpl	/mailbox.html'
	});
}]);