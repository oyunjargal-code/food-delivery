import { Hono } from "hono";
import { registerFoodRoute } from "./routes/foods.route";
import { D1Database } from "@cloudflare/workers-types";

export type Bindings = {
  food_delivery_prod: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => c.text("Please test me!"));

registerFoodRoute(app);

export default app;
