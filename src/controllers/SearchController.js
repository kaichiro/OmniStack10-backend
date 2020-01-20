const Dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    /**
     * Método que lista todos os registros
     * @param {request} req requisição
     * @param {response} res resposta
     */
    async index(req, res) {
        const { latitude, longitude, techs } = req.query;
        const techsArray = ParseStringAsArray(techs);
        const devs = Dev.find({
            techs: {
                $in: techsArray,
            },
        });
        return res.json(devs);
    },
}