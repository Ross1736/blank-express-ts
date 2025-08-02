import express, { Request, Response } from "express";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
