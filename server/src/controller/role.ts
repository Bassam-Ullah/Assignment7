import { Request, Response } from "express";
import Role from "../models/role";

export const addRole = async (req: Request, res: Response) => {
  const id = Number(req.body.id);
  const { name, description } = req.body;
  try {
    const data = await Role.create({
      id: id,
      name: name,
      description: description,
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getRoleData = async (req: Request, res: Response) => {
  try {
    const data = await Role.findAll();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};
