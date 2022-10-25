import { Request, Response } from "express";
import Customer from "../models/customer";
import Role from "../models/role";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await User.findAll({ include: ["role", "customer"] });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: { id: id },
    });

    const users = await User.findAll({ include: ["role", "customer"] });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const {
    firstName,
    middleName,
    lastName,
    phoneNumber,
    email,
    address,
    customer,
    role,
  } = req.body;

  try {
    const rid = await Role.findOne({ where: { name: role } });
    await Customer.create({ name: customer });
    const cid = await Customer.findOne({ where: { name: customer } });

    const newUser = await User.create({
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      phoneNumber: Number(phoneNumber),
      rid: Number(rid?.get().id),
      cid: Number(cid?.get().id),
      email: email,
      address: address,
    });
    console.log(newUser);
    const users = await User.findAll({ include: ["role", "customer"] });
    res.status(201).json(users);
  } catch (error) {}
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { firstName, middleName, lastName, email, address, phoneNumber } =
    req.body;
  try {
    await User.update(
      {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
      },
      {
        where: { id: id },
      }
    );
    const users = await User.findAll({ include: ["role", "customer"] });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
