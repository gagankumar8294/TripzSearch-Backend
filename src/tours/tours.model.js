// tours.model.js

export default class ToursModel {
  constructor(title, destination, price, startDate, duration, imageUrl, id) {
    this.title = title;
    this.destination = destination;
    this.price = price;
    this.startDate = startDate;
    this.duration = duration;
    this.imageUrl = imageUrl;
    this.id = id;
  }

  // CREATE
  static Add(title, destination, price, startDate, duration, imageUrl) {
    const newTour = new ToursModel(
      title,
      destination,
      price,
      startDate,
      duration,
      imageUrl
    );
    newTour.id = tours.length + 1;
    tours.push(newTour);
    return newTour;
  }

  // READ ALL
  static GetAll() {
    return tours;
  }

  // READ ONE
  static GetById(id) {
    return tours.find(t => t.id == id);
  }

  // UPDATE
  static Update(id, data) {
    const tour = tours.find(t => t.id == id);
    if (!tour) return null;

    tour.title = data.title || tour.title;
    tour.destination = data.destination || tour.destination;
    tour.price = data.price || tour.price;
    tour.startDate = data.startDate || tour.startDate;
    tour.duration = data.duration || tour.duration;
    tour.imageUrl = data.imageUrl || tour.imageUrl;

    return tour;
  }

  // DELETE
  static Delete(id) {
    const index = tours.findIndex(t => t.id == id);
    if (index === -1) return null;

    const deleted = tours[index];
    tours.splice(index, 1);
    return deleted;
  }
}

// Dummy Data
export var tours = [
  {
    id: 1,
    title: "Goa Beach Tour",
    destination: "Goa",
    price: 8999,
    startDate: "2025-12-01",
    duration: "5 Days",
    imageUrl: "https://example.com/goa.jpg"
  }
];
