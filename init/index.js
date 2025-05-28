const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
    return initDB();  
  })
  .then(() => {
    console.log("Data initialization complete");
    mongoose.connection.close(); 
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  // Generate a valid ObjectId for owner
  const validOwnerId = new mongoose.Types.ObjectId;


  // Add the valid ObjectId as owner to each listing
  const initDB = async () => {
    await Listing.deleteMany({});
  
    const validOwnerId = new mongoose.Types.ObjectId;
  
    initData.data = initData.data.map((obj) => ({
      ...obj,
      owner: validOwnerId,
      image: {
        url: obj.image,
        filename: "seed-image"
      }
    }));
  
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
  };
  

  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
