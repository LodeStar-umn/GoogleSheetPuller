const GitHubApi = require("github");

var github = new GitHubApi();

// user token
github.authenticate({
    type: "token",
    token: token,
});

github.users.getFollowingForUser({
    username: "gedion"
}, function(err, res) {
		if (err) {
      console.log('err ', err);
		} else {
      console.log(JSON.stringify(res));
		}
});
