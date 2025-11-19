// tours.controller.js

import ToursModel from "./tours.model.js";

export default class ToursController {

  getAll(req, res) {
    const allTours = ToursModel.GetAll();
    res.status(200).send(allTours);
  }

  getById(req, res) {
    const id = req.params.id;
    const tour = ToursModel.GetById(id);

    if (!tour) {
      return res.status(404).send({ message: "Tour not found" });
    }

    res.status(200).send(tour);
  }

  add(req, res) {
    const { title, destination, price, startDate, duration, imageUrl } = req.body;

    const newTour = ToursModel.Add(
      title, destination, price, startDate, duration, imageUrl
    );

    res.status(201).send(newTour);
  }

  update(req, res) {
    const id = req.params.id;
    const updated = ToursModel.Update(id, req.body);

    if (!updated) {
      return res.status(404).send({ message: "Tour not found" });
    }

    res.status(200).send(updated);
  }

  delete(req, res) {
    const id = req.params.id;
    const deleted = ToursModel.Delete(id);

    if (!deleted) {
      return res.status(404).send({ message: "Tour not found" });
    }

    res.status(200).send({ message: "Tour deleted successfully" });
  }
}
