import  express  from "express";
import { login,signout,signup } from "../controllers/auth.controller.js";

const  router  = express.Router();

router.post("/signup",signup)
router.get("/login",login)
router.get("/logout",signout)




export default router ;

