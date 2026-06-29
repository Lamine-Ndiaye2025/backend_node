const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    // Titre de la question
    titre: {
      type: String,
      required: [true, "Le titre est obligatoire"],
      trim: true,
    },

    // Description de la question
    description: {
      type: String,
      required: [true, "La description est obligatoire"],
      trim: true,
    },

    // Auteur de la question
    auteur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "L'auteur est obligatoire"],
    },

    // Nombre de vues
    vues: {
      type: Number,
      default: 0,
    },

    // Utilisateurs ayant voté positivement
    upVotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // Utilisateurs ayant voté négativement
    downVotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // Nombre de réponses
    nombreReponses: {
      type: Number,
      default: 0,
    },

    // Liste des tags
    tags: [
      {
        type: String,
        trim: true,
      },
    ],

    // La question est-elle résolue ?
    resolue: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", questionSchema);