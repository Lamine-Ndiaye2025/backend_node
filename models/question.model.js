const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    tages: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Nombre de vues
    vues: {
      type: Number,
      default: 0,
    },

    // Votes positifs
    upVotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // Votes négatifs
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

    // Tags de la question
    tags: [
      {
        type: String,
        trim: true,
      },
    ],

    // Question résolue ou non
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