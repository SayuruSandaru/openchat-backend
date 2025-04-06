const http = require('http');
const app = require('./src/app');
const { connectDb } = require('./src/config/database');

(async () => {
    try {
        await connectDb();
        const server = http.createServer(app);
        server.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    } catch (e) {
        console.error(e);
    }
})();
