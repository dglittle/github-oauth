
;(function () {
	GITHUB_OAUTH_CLIENT_ID = '9158eb472ff35a7a1141'
	GITHUB_OAUTH_CLIENT_SECRET = 'b4e3838b34a606e5b84d55ba2d36da7a7f8ddde2'

	var messageListener = null
	github_oauth = function (scope, cb) {
		var state = 'x' + Math.random()
		if (!messageListener)
			addEventListener("message", function (e) {
				messageListener(e)
			}, false)
		messageListener = function (e) {
			if (e.data.indexOf(state) == 0)
				cb(e.data.split(/,/)[1])
		}
		var w = window.open('https://github.com/login/oauth/authorize?client_id=' + GITHUB_OAUTH_CLIENT_ID + '&scope=' + scope + '&state=' + state)
	}
})();
