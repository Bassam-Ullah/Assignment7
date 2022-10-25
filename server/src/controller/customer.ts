import { Request, Response } from "express";
import Customer from "../models/customer";
import customer from "../models/customer";

export const addCustomer = async (req: Request, res: Response) => {
  const { name, website, address } = req.body;
  try {
    const data = await customer.create({
      name: name,
      website: website,
      address: address,
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const data = await customer.findAll();
    // console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Customer.destroy({
      where: { id: id },
    });
  } catch (error) {
    console.log(error);
  }
};
