const mongoose = require("mongoose");

const hostel = new mongoose.Schema({
  university: { type: String, required: [true, "A Hostel must be located near a university"] },
  hostelName: { type: String, required: [true, "A Hostel must have a name"] },
  price: { type: Number, required: [true, "A Hostel must have a price"] },
  location: { type: String, required: [true, "A Hostel must have a location"] },
  contact: { type: String, required: [true, "A Hostel must have a contact"] },
  overview: { type: String, trim: true, required: [true, "A Hostel must have an overview"] },
  rating: { type: Number, default: 2.5, min: [1, "Rating must be above 1"], max: [5, "Rating must be above 1"] },
  imageCover: {
    type: String,
    required: [true, "A Hostel must have an image cover"],
  },
  images: [String],
  createdAt: { type: Date, default: Date.now(), select: false },
});

module.exports = mongoose.model("hostel", hostel);
