const express = require("express");
const router = express.Router();

const reponseController = require("../controllers/reponse.controller");
const { verifierReponse } = require("../middleware/reponseMiddleware");

// Ajouter une réponse
router.post(
  "/reponse",
  verifierReponse,
  reponseController.ajouterReponse
);

// Récupérer toutes les réponses d'une question
router.get(
  "/question/:questionId",
  reponseController.getReponsesByQuestion
);

// Supprimer une réponse
router.delete(
  "/:id",
  reponseController.supprimerReponse
);

module.exports = router;