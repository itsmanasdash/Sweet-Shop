import { Router } from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth";
import { verifyJWT } from "../middleware/auth";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route('/logout').post(verifyJWT,logoutUser);

export default router;