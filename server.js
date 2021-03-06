// https://github.com/Blizzard/node-signature-generator/blob/master/server.js

require("dotenv").config();

const throng = require("throng");
const getApp = require("./backend/app");

const port = process.env.PORT || 3000;

throng({
  workers: 2,
  master: () => {
    console.log("Starting main process");
  },
  start: async (id) => {
    const app = await getApp();
    app.listen(port, () => console.log(`Child ${id} listening on port ${port}`))
  }
});