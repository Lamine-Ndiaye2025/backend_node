const Reponse = require("../models/reponse.model");
const Question = require("../models/question.model");

// Ajouter une réponse
exports.ajouterReponse = async (req, res) => {
  try {
    const { contenu, auteur, questionId } = req.body;

    if (!contenu || !auteur || !questionId) {
      return res.status(400).json({
        message: "Tous les champs sont obligatoires",
      });
    }

    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({
        message: "Question introuvable",
      });
    }

    const nouvelleReponse = new Reponse({
      contenu,
      auteur,
      question: questionId,
    });

    await nouvelleReponse.save();

    res.status(201).json({
      message: "Réponse ajoutée avec succès",
      reponse: nouvelleReponse,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

// Récupérer toutes les réponses d'une question
exports.getReponsesByQuestion = async (req, res) => {
  try {
    const reponses = await Reponse.find({
      question: req.params.questionId,
    }).populate("auteur", "nom prenom email");

    res.status(200).json(reponses);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

// Supprimer une réponse
exports.supprimerReponse = async (req, res) => {
  try {
    const reponse = await Reponse.findByIdAndDelete(req.params.id);

    if (!reponse) {
      return res.status(404).json({
        message: "Réponse introuvable",
      });
    }

    res.status(200).json({
      message: "Réponse supprimée avec succès",
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};