const oauth2 = require("simple-oauth2");

// code from https://github.com/Blizzard/node-signature-generator/blob/master/app/oauth/client.js
// required version downgrade of simple-oauth2 dependency
class OAuthClient {
    constructor({
        oauthOptions
    }) {
        this.client = oauth2.create(oauthOptions);
        this.token = null;
    }

    async getToken() {
        try {
            if (this.token === null || this.token.expired()) {
                const token = await this.client.clientCredentials.getToken();
                this.token = this.client.accessToken.create(token);
            }
            return this._reduceToken(this.token);
        } catch(err) {
            console.error(`Failed to retrieve client credentials oauth token: ${err.message}`);
            throw err;
        }
    }

    _reduceToken(token) {
        return token.token.access_token;;
    }
}

module.exports = OAuthClient;