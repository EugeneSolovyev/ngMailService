app.controller('UserControl', function (Users) {
	var userCtrl = this;
  	
  	Users.getUserList().then(users => userCtrl.users = users);
   	selectUser(localStorage.getItem('user'));
  
  	userCtrl.selectUser = selectUser;
  	function selectUser (user_id) {
	  Users.getUserId(user_id).then(user => {
		  userCtrl.user = user;
		  localStorage.setItem('user', user_id);
	  });
	}
});

app.controller('MailControl', function (MailList) {
	var mCtrl = this;
	setInterval(function () {
		selectLetters(localStorage.getItem('user'));
	}, 500);
	mCtrl.selectLetters = selectLetters;
	
	function selectLetters (letters_id) {
		MailList.getLettersId(letters_id).then(mailbox => {
			for (var i = 0; i < Object.values(mailbox).length; i++) {
				mCtrl.mail = Object.values(mailbox)[i];	
			}
		});
	};
});