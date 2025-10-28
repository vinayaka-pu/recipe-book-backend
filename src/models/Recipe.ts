import mongoose, { Schema, Document } from "mongoose";

interface IRecipe extends Document {
  title: string;
  image: string;
  ingredients: string[];
  steps: string[];
}

const RecipeSchema: Schema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: [{ type: String }],
  steps: [{ type: String }],
});

export default mongoose.model<IRecipe>("Recipe", RecipeSchema);
