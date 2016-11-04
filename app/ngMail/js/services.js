app.service('Users', function($http) {
	var users = {};
	var promise = $http.get('ngMail/json/users.json').then((resolved) => {
		for (var i = 0; i < resolved.data.user.length; i++) {
			var user = resolved.data.user[i];
			users[user.id] = user;
		}
	});
	this.getUserId = function(id) {
		return promise.then(() => users[id]);
	};
	this.getUserList = function() {
		return promise.then(() => Object.values(users));
	};
});

app.service('MailList', function($http) {
	var mails = {};
	var newPromise = $http.get('ngMail/json/mailbox.json').then((res) => {
		mails = res.data.mailbox;
	});
	this.getLettersId = function (id) {
		return newPromise.then(() => mails[id]);
	};
});
