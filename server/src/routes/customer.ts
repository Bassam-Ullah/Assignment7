import { Router } from "express";
import { addCustomer, getCustomers } from "../controller/customer";

const router = Router();

router.get("/", getCustomers);
router.post("/", addCustomer);

export default router;
