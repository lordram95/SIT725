const petModel = require('../models/petModel');

module.exports = {
    getAllPets: async (req, res) => {
        try {
            const pets = await petModel.getAllPets(req.app.locals.collection);
            res.json({ statusCode: 200, data: pets, message: 'get all pets successful' });
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
        }
    },

    getPetById: async (req, res) => {
        try {
            const pet = await petModel.getPetById(req.app.locals.collection, req.params.id);
            res.json({ statusCode: 200, data: pet, message: 'get pet successful' });
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
        }
    },

    postPet: async (req, res) => {
        try {
            const pet = req.body;
            const result = await petModel.postPet(req.app.locals.collection, pet);
            res.json({ statusCode: 201, data: result, message: 'success' });
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
        }
    }
};
