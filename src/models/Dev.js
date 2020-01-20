const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

/**
 * Schema para Dev
 */
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere',
    },
}, {
    timestamps: true,
    // timestamps: { createdAt: 'Create_At' },
});

module.exports = mongoose.model('Dev', DevSchema);