import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("API running"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/recipes", recipeRoutes);
