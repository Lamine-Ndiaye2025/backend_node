exports.inscription = async (req, res) => {
  try {
    const { nom, email, password } = req.body;

    // Ici tu ajouteras plus tard l'enregistrement dans MongoDB

    res.status(201).json({
      message: "Inscription réussie",
      utilisateur: {
        nom,
        email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erreur serveur",
    });
  }
};

exports.connexion = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Ici tu vérifieras plus tard les informations en base

    res.status(200).json({
      message: "Connexion réussie",
      utilisateur: {
        email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erreur serveur",
    });
  }
};