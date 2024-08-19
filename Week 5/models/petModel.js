const { ObjectId } = require('mongodb');

module.exports = {
    getAllPets: async (collection) => {
        return collection.find({}).toArray();
    },

    getPetById: async (collection, id) => {
        const objectId = new ObjectId(id);
        return collection.findOne({ _id: objectId });
    },

    postPet: async (collection, pet) => {
        return collection.insertOne(pet);
    }
};
