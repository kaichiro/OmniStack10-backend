const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();
const ROUTES_BASE = {
    devs: '/devs',
    search: '/search',
};

routes.get(ROUTES_BASE.devs, DevController.index);
routes.post(ROUTES_BASE.devs, DevController.store);

routes.get(ROUTES_BASE.search, SearchController.index);

module.exports = routes;
