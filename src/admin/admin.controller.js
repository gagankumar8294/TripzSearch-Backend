import AdminModel from "./admin.model.js";
import jwt from "jsonwebtoken";

export default class AdminController {

  // CREATE NEW ADMIN
  async signup(req, res) {
    const { username, password } = req.body;

    const existing = await AdminModel.FindByUsername(username);
    if (existing) {
      return res.status(400).send({ message: "Admin already exists" });
    }

    const newAdmin = await AdminModel.Create(username, password);

    res.status(201).send({
      message: "Admin created",
      admin: newAdmin
    });
  }

  // LOGIN ADMIN
  async signIn(req, res) {
    const { username, password } = req.body;

    const admin = await AdminModel.ValidateLogin(username, password);

    if (!admin) {
      return res.status(401).send({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      "SecuredKey",
      { expiresIn: "2h" }
    );

    res.status(200).send({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        username: admin.username
      }
    });
  }
}
