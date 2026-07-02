const express = require("express");
const router = express.Router();

// Import des contrôleurs
const {
  connexion,
  inscription,
} = require("../controllers/auth.controller");

// Route d'inscription
router.post("/inscription", inscription);

// Route de connexion
router.post("/connexion", connexion);

module.exports = router;