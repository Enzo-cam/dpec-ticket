import mongoose from 'mongoose';

function dbConnect() {
  // check if we are already connected to the database
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  console.log("DB_URL", process.env.MONGODB_URI)

  return mongoose.connect(process.env.MONGODB_URI as string).catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });
}

export default dbConnect;
