import { Router } from "express";
import Recipe from "../models/Recipe";

const router = Router();

// Get all recipes
router.get("/", async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

// Add recipe
router.post("/", async (req, res) => {
  const newRecipe = new Recipe(req.body);
  const savedRecipe = await newRecipe.save();
  res.json(savedRecipe);
});

// Get recipe by ID
router.get("/:id", async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.json(recipe);
});

// Update recipe
router.put("/:id", async (req, res) => {
  const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete recipe
router.delete("/:id", async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: "Recipe deleted" });
});

export default router;
