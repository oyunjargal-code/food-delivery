import { Hono } from "hono";
import { getFoods } from "../controllers/books/get-foods";
import { getFoodById } from "../controllers/books/get-food-by-id";
import { postFoods } from "../controllers/books/post-foods";
import { putFoods } from "../controllers/books/put-foods";
import { deleteFoods } from "../controllers/books/delete-foods";
import { Bindings } from "../index";
import { App } from "../types";

export const registerFoodRoute = (app: App) => {
  app.get("/foods", getFoods);

  app.get("/foods/:id", getFoodById);

  app.post("/foods", postFoods);

  app.put("/foods/:id", putFoods);

  app.delete("/foods/:id", deleteFoods);
};
