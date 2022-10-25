import {Router} from "express";
import {addRole, getRoleData} from "../controller/role";

const router = Router();

router.get("/",getRoleData);
router.post('/',addRole);

export default router;