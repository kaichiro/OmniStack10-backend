const axios = require('axios');
const Dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/parseStringAsArray');

/** Objeto de controle para persistência de Dev */
module.exports = {
    /**
     * Lista todos os devs
     * @param {requisições} request parâmetros, query
     * @param {resposta} response respostas da requisição
     */
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },
    /**
     * Inclui registro de Dev   
     * @param {requisições} request requests, parâmetros, query
     * @param {resposta} response resposta da requisição
     */
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data;
            const techsArray = ParseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name,
                bio,
                avatar_url,
                techs: techsArray,
                location,
            });
        }
        return response.json(dev);
    },
};