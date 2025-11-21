import ToursModel from "./tours.model.js";

export default class ToursController {

  async getAll(req, res) {
    const allTours = await ToursModel.GetAll();
    res.status(200).send(allTours);
  }

  async getById(req, res) {
    const id = req.params.id;
    const tour = await ToursModel.GetById(id);

    if (!tour) {
      return res.status(404).send({ message: "Tour not found" });
    }

    res.status(200).send(tour);
  }

  async add(req, res) {
    const { title, destination, price, startDate, duration, imageUrl } = req.body;

    // Validate required fields
    if (!title || !destination || !price) {
      return res.status(400).send({ message: "Missing required fields" });
    }

    const newTour = await ToursModel.Add(
      title,
      destination,
      price,
      startDate,
      duration,
      imageUrl // this is just a string url
    );

    res.status(201).send(newTour);
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body; // imageUrl allowed here too
    const updated = await ToursModel.Update(id, data);

    if (!updated) {
      return res.status(404).send({ message: "Tour not found" });
    }

    res.status(200).send(updated);
  }

async delete(req, res) { 
  const id = req.params.id; 
  const deleted = await ToursModel.Delete(id); 
  console.log('data after deleting from model', deleted) 
  res.status(200).send({ message: "Tour deleted successfully" }); 
}




}
