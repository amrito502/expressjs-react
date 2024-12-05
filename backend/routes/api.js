import express from "express";
const router = express.Router();


import * as UsersController from "../app/controllers/UsersController.js";



// Users
router.post("/Registration", UsersController.Registration)







export default router;


