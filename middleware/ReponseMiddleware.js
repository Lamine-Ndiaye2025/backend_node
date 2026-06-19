// middleware/reponseMiddleware.js

exports.verifierReponse = (req, res, next) => {
  const { contenu, auteur, questionId } = req.body;

  if (!contenu || !auteur || !questionId) {
    return res.status(400).json({
      success: false,
      message: "Le contenu, l'auteur et l'identifiant de la question sont obligatoires.",
    });
  }

  if (contenu.trim().length < 5) {
    return res.status(400).json({
      success: false,
      message: "La réponse doit contenir au moins 5 caractères.",
    });
  }

  next();
};