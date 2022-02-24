const express = require('express');

const config = require('./config');
const OauthClient = require('./oauth/client');
const CharacterService = require('./services/CharacterService');

// .env client ID and secret are obtained from the Blizzard developer portal
const oauthOptions = {
    client: {
        id: process.env.BNET_ID,
        secret: process.env.BNET_SECRET,
    },
    auth: {
        tokenHost: "https://us.battle.net"
    }
};

const oauthClient = new OauthClient({ oauthOptions })
const characterService = new CharacterService(oauthClient, config);

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    // bypass CORS error
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use('/getMounts/:region/:realmName/:characterName', async (req, res, next) => {
    try {
        const mounts = await characterService.getCharacterData(
            req.params.region,
            req.params.realmName,
            req.params.characterName,
            'mounts'
        );
        console.log(mounts);
        res.status(200).json(mounts);
    } catch (e) {
        // eventually handle with error handling middleware
        next(e);
    }
    
});

module.exports = async() => {
    await oauthClient.getToken();
    return app;
}
