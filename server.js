process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION :", err);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION :", err);
});
const authRoutes = require("./routes/auth.routes");

app.use("/api", authRoutes);