require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

const connection_settings = {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database_name: process.env.DB_NAME,
};
const system = {
    PORT: process.env.PORT,
    HOME: `http://localhost`,
}

mongoose.connect(
    `mongodb+srv://${connection_settings.username}:${connection_settings.password}@cluster0-mkbtw.mongodb.net/${connection_settings.database_name}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use(express.json());
app.use(routes);

app.listen(system.PORT, () => {
    console.log(`Backend is working at ${system.HOME}:${system.PORT}`);
    console.log(`Press CTRL+C to stop Backend!`);
});
