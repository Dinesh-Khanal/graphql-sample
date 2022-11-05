import mongoose from "mongoose";

const connectDb = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => console.log(`MongoDb connected in ${data.connection.host}`))
    .catch((error) => console.log(error.message));
};
export default connectDb;
