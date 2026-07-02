const express = require("express");
const router = express.Router();

const questionController = require("../controllers/question.controller");
const { verifierQuestion } = require("../middleware/questionMiddleware");

// Ajouter une question
router.post("/", verifierQuestion, questionController.ajouterQuestion);

// Récupérer toutes les questions
router.get("/", questionController.getQuestions);

// Récupérer une question par ID
router.get("/:id", questionController.getQuestionById);

// Supprimer une question
router.delete("/:id", questionController.supprimerQuestion);




module.exports = router;