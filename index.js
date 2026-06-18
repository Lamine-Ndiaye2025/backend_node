const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectBD = require("./config/db");
const userRoute = require("./routes/user.route");

dotenv.config();

const app = express();

connectBD();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://front-node-48jd.vercel.app",
    ],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", userRoute);

app.get("/", (req, res) => {
  res.send("Bienvenue sur mon serveur");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});