import mongoose from "mongoose";
mongoose.set('strictQuery', true);

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },

});

const studentModel = mongoose.model('student', studentSchema);
export default studentSchema;