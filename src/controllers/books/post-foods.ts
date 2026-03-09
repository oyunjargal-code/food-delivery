import { Context } from "hono";
import { foods } from "../../model/foods";

export const postFoods = async (c: Context) => {
  const { title } = await c.req.json();

  const newFood = {
    id: "2",
    title,
  };

  const updateFoods = [...foods, newFood];

  c.status(200);

  return c.json({ foods: updateFoods });
};
