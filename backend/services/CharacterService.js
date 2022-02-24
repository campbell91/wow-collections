const fetch = require("isomorphic-fetch");
const slug = require("slug");

// based on https://github.com/Blizzard/node-signature-generator/blob/master/app/services/CharacterService.js
class CharacterService {

    constructor(oauthClient, config) {
        this.oauthClient = oauthClient;
        this.config = config;
    }

    async getCharacterData(region, realmName, characterName, dataRequest = 'profile', locale = 'en_US') {
        const oauthToken = await this.oauthClient.getToken();
        const encodedCharacterName = encodeURIComponent(characterName);
        const realmNameSlug = slug(realmName);
        const host = this.config.apiHosts[region];
        
        let characterSummaryDocumentURL;
        switch (dataRequest) {
            case 'mounts':
                characterSummaryDocumentURL = `${host}/profile/wow/character/${realmNameSlug}/${encodedCharacterName}/collections/mounts?locale=${locale}`;
                break;

            case 'reps': // summary of character reputations
                characterSummaryDocumentURL = `${host}/profile/wow/character/${realmNameSlug}/${encodedCharacterName}/reputations`;
                break;

            default: // character profile summary
                characterSummaryDocumentURL = `${host}/profile/wow/character/${realmNameSlug}/${encodedCharacterName}`;
                break;
        }

        const namespace = this.config.namespaces.profile[region];
        const headers = { Authorization: `Bearer ${oauthToken}`, 'Battlenet-Namespace': namespace };

        const response = await fetch(characterSummaryDocumentURL, { headers });
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}: ${characterSummaryDocumentURL}`);
        }
        return response.json();
    }
}

module.exports = CharacterService;