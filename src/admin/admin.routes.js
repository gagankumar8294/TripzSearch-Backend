// routes/admin.route.js
import express from "express";
import AdminController from "./admin.controller.js";
import jwtAuth from "../middlewares/jwt.middleware.js";

const adminController = new AdminController();
const AdminRouter = express.Router();

AdminRouter.post("/signup", adminController.signup);
AdminRouter.post("/signin", adminController.signIn);
// Protected Route Example
AdminRouter.get("/dashboard", jwtAuth, (req, res) => {
  res.send({
    message: "Admin Dashboard Access Allowed",
    admin: req.admin
  });
});

export default AdminRouter;
