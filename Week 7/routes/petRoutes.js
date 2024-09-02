const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

router.get('/pets', petController.getAllPets);
router.get('/pet/:id', petController.getPetById);
router.post('/pet', petController.postPet);

module.exports = router;
