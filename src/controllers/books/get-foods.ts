import { Context } from "hono";
import { foods } from "../../model/foods";
import { AppContext } from "../../types";
import { foodsTable } from "../../db/schema";
import { getDrizzleDb } from "../../db";

export const getFoods = async (c: AppContext) => {
  const d1 = c.env.food_delivery_prod;
  const db = getDrizzleDb(d1);

  const foods = await db.select().from(foodsTable);
  return c.json({ foods: foods });
};
