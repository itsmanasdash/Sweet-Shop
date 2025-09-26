import { Router } from "express";
import { registerUser, loginUser, logoutUser , getUser } from "../controllers/auth";
import { verifyJWT } from "../middleware/auth";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route('/logout').post(verifyJWT,logoutUser);
router.route("/me").get(verifyJWT,getUser);

export default router;