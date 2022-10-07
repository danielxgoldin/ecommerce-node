const routes = require('./routes');
const express = require('express');

// this imports the squelize connection


const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

// this turns the database into a server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening ${PORT}!`));
});