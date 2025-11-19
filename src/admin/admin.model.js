import { DB } from "../../config/db.js";
import { ObjectId } from "mongodb";

export default class AdminModel {

  // CREATE ADMIN IN DATABASE
  static async Create(username, password) {
    const result = await DB.collection("admins").insertOne({
      username,
      password
    });

    return {
      id: result.insertedId,
      username,
      password
    };
  }

  // FIND ADMIN BY USERNAME
  static async FindByUsername(username) {
    return await DB.collection("admins").findOne({ username });
  }

  // VALIDATE LOGIN
  static async ValidateLogin(username, password) {
    return await DB.collection("admins").findOne({ username, password });
  }
}
