import { DB } from "../../config/db.js";
import { ObjectId } from "mongodb";

export default class ToursModel {

  // CREATE TOUR
  static async Add(title, destination, price, startDate, duration, imageUrl) {
    const result = await DB.collection("tours").insertOne({
      title,
      destination,
      price,
      startDate,
      duration,
      imageUrl
    });

    return {
      id: result.insertedId,
      title,
      destination,
      price,
      startDate,
      duration,
      imageUrl
    };
  }

  // GET ALL TOURS
  static async GetAll() {
    return await DB.collection("tours").find().toArray();
  }

  // GET BY ID
  static async GetById(id) {
    return await DB.collection("tours").findOne({ _id: new ObjectId(id) });
  }

  // UPDATE TOUR
  static async Update(id, data) {
    const updated = await DB.collection("tours").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: data },
      { returnDocument: "after" }
    );

    return updated.value;
  }

  // DELETE TOUR
  static async Delete(id) {
    const deleted = await DB.collection("tours").findOneAndDelete({
      _id: new ObjectId(id)
    });

    return deleted.value;
  }
}
