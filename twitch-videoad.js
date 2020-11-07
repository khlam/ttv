/// twitch-videoad.js
// source: https://old.reddit.com/r/Twitch/comments/jjepg8/fix_for_ublock_origin_on_twitch_i_updated_the/
const origFetch = window.fetch;
window.fetch = (url, init, ...args) => {
	if (typeof url === "string") {
		if (url.includes("/access_token")) {
			// url = url.replace("player_type=site", "player_type=site");
		} else if (
			url.includes("/gql") &&
			init &&
			typeof init.body === "string" &&
			init.body.includes("PlaybackAccessToken")
		) {
			// const newBody = JSON.parse(init.body);
			// newBody.variables.playerType = "site";
			// init.body = JSON.stringify(newBody);
		}
	}
	return origFetch(url, init, ...args);
};
