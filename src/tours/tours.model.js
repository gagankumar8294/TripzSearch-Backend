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

  // Helper: detect whether id is valid ObjectId
  static formatId(id) {
    return ObjectId.isValid(id) ? new ObjectId(id) : id;
  }

  // GET ALL TOURS
  static async GetAll() {
    return await DB.collection("tours").find().toArray();
  }

  // GET BY ID
  static async GetById(id) {
    const formattedId = this.formatId(id);

    return await DB.collection("tours").findOne({
      _id: formattedId
    });
  }

  // UPDATE TOUR
  static async Update(id, data) {
  const formattedId = this.formatId(id);

  const options = {
    returnDocument: "after",
    returnOriginal: false
  };

  const updated = await DB.collection("tours").findOneAndUpdate(
    { _id: formattedId },
    { $set: data },
    options
  );

  return updated.value || await DB.collection("tours").findOne({ _id: formattedId });
}



static async Delete(id) { 
  const formattedId = this.formatId(id); 
  const deleted = await DB.collection("tours").findOneAndDelete({ _id: formattedId }); 
  // deleted.value contains the deleted document 
  if (!deleted.value) { 
    return null; 
    // nothing was deleted 
    } return true; 
    // deletion successful 
    }


}
