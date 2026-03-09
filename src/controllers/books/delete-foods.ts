import { Context } from "hono";
import { foods } from "../../model/foods";

export const deleteFoods = (c: Context) => {
  const id = c.req.param("id");

  const deleteFoods = foods.filter((food) => food.id !== id);

  c.status(200);

  return c.json({ success: true, foods: deleteFoods });
};
