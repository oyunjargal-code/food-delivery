import { Context } from "hono";
import { foods } from "../../model/foods";

export const putFoods = async (c: Context) => {
  const id = c.req.param("id");

  const { title } = await c.req.json();

  console.log(id, title);

  const updateFoods = foods.map((food) => {
    if (food.id === id) {
      const updateFood = {
        ...food,
        title,
      };
      return updateFood;
    } else {
      return food;
    }
  });

  c.status(200);

  return c.json({ foods: updateFoods });
};
