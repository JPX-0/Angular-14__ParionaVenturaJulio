const { Schema } = require("mongoose");

const StudentSchema = new Schema({
  info: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email"],
    },
    image: { type: String }
  },
  data: {
    status: { type: String, required: true },
    commission: { type: Number, required: true },
    courses: [{ type: String }]
  },
  // updatedAt: { type: Date, required: true },
  // createdAt: { type: Date, required: true }
});
// StudentSchema.index({ createdAt: 1 });

module.exports = StudentSchema;