const express = require('express');

const App = express();

App.use(express.Router());
App.use(express.json());

module.exports = () => {
    return App;
}