const Question = require("../models/question.model");

// Ajouter une question
exports.ajouterQuestion = async (req, res) => {
  try {
    const { titre, description, tages } = req.body;

    if (!titre || !description) {
      return res.status(400).json({
        message: "Tous les champs sont obligatoires",
      });
    }

    const nouvelleQuestion = new Question({
      titre,
      description,
      user: tages,
    });

    await nouvelleQuestion.save();

    res.status(201).json({
      message: "Question ajoutée avec succès",
      question: nouvelleQuestion,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

// Récupérer toutes les questions
exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find()
      .populate("user", "nom prenom email")
      .sort({ createdAt: -1 });

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

// Récupérer une question par ID
exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id)
      .populate("user", "nom prenom email");

    if (!question) {
      return res.status(404).json({
        message: "Question introuvable",
      });
    }

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

// Supprimer une question
exports.supprimerQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question) {
      return res.status(404).json({
        message: "Question introuvable",
      });
    }

    res.status(200).json({
      message: "Question supprimée avec succès",
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};