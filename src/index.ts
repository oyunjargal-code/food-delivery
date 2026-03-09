import { Hono } from "hono";

const app = new Hono();

let foods = [
  {
    id: "1",
    title: "Aartstai shul",
  },
];

app.get("/foods", (c) => {
  return c.json({ foods: foods });
});

app.get("/foods/:id", (c) => {
  const id = c.req.param("id");

  const food = foods.find((food) => food.id === id);

  return c.json({ foods: foods });
});

app.post("/foods", async (c) => {
  const { title } = await c.req.json();

  const newFood = {
    id: "2",
    title,
  };

  const updateFoods = [...foods, newFood];

  foods = updateFoods;

  c.status(200);

  return c.json({ foods });
});

app.put("/foods/:id", async (c) => {
  const id = c.req.param("id");

  const { title } = await c.req.json();

  console.log(id, title);

  const newFood = {
    id: "2",
  };

  const updateFoods = [...foods, newFood];

  foods = updateFoods;

  c.status(200);

  return c.json({ foods });
});

export default app;
