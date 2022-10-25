import { Router } from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../controller/user";

const router = Router();

router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.post("/", createUser);
router.put("/:id", updateUser);

export default router;
