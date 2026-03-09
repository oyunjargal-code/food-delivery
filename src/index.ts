import { Hono } from "hono";
import { registerFoodRoute } from "./routes/foods.route";

const app = new Hono();

registerFoodRoute(app);
export default app;
