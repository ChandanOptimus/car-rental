//this file is to import any json file to our mongoDB

const { MongoClient } = require("mongodb");
const fs = require("fs");
const config = require("config");

// MongoDB Atlas URL
const url = config.get("mongoURI");
const dbName = "CarRental";
const collectionName = "AllCarNames";

// Read JSON file
const jsonData = JSON.parse(fs.readFileSync("allVehicles.json", "utf-8"));

// Function to connect to the database and insert data
async function insertData() {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    // Connect to the MongoDB client
    await client.connect();
    console.log("Connected successfully to server");

    // Get the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert data
    const insertResult = await collection.insertMany(jsonData);
    console.log("Inserted documents:", insertResult.insertedCount);
  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection
    await client.close();
  }
}

insertData();
