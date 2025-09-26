import { Router } from "express";
import { getAllSweets, createSweet, searchSweets, updateSweet, deleteSweet, purchaseSweet, restokeSweet } from "../controllers/sweet";
import { verifyJWT } from "../middleware/auth";
const router = Router();

router.route("/").get(getAllSweets);
router.route("/").post(verifyJWT, createSweet);
router.route("/search").get(searchSweets);
router.route("/:id").put(updateSweet);
router.route("/:id").delete(deleteSweet); // admin only
router.route("/:id/purchase").post(verifyJWT, purchaseSweet);
router.route("/:id/restock").post(restokeSweet); //admin only

export default router;