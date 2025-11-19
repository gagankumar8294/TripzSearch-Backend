// config/db.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
export let DB;

export default async function connectDB() {
  try {
    await client.connect();
    DB = client.db("tours_app"); // database name
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.log("MongoDB Connection Failed:", err);
  }
}
