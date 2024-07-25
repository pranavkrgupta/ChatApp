const chats = require("./data/data");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
dotenv.config();
const PORT = process.env.PORT || 4000;
const { notFound, errorHandler } = require("./Middleware/errorMiddleware");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
