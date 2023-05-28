
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const  {PORT} = process.env;
//const port = PORT || 3001;
require('dotenv').config();


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at' , process.env.PORT); // eslint-disable-line no-console
  });
});
