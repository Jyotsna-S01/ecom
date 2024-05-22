import express, {Router} from "express";
import { registerController,loginController, forgetPasswordController, testController} from "../Controllers/authController.js";
import { isAdmin, requireSignIn } from "../Middelwares/authMiddleware.js";

const router = express.Router();

router.post("/register",registerController)
router.post("/login", loginController)
router.post("/forgot-password", forgetPasswordController)

router.get("/test", requireSignIn, isAdmin ,testController)
router.get("/user-auth", requireSignIn, (req, res) =>{
    res.status(200).send({ok: true})
});
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) =>{
    res.status(200).send({ok: true})
})

export default router;