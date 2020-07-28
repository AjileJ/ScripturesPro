const server = require('./api/server.js');

const PORT = process.env.PORT || 3300;

server.listen(PORT, () => {
    console.log(`**~~~ Server Listening on port ${PORT} ~~~**`)
});