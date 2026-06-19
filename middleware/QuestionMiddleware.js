// middleware/QuestionMiddleware.js

exports.verifierQuestion = (req, res, next) => {
  const { titre, description } = req.body;

  if (!titre || !description) {
    return res.status(400).json({
      success: false,
      message: "Le titre et la description sont obligatoires",
    });
  }

  if (titre.length < 5) {
    return res.status(400).json({
      success: false,
      message: "Le titre doit contenir au moins 5 caractères",
    });
  }

  if (description.length < 10) {
    return res.status(400).json({
      success: false,
      message: "La description doit contenir au moins 10 caractères",
    });
  }

  next();
};