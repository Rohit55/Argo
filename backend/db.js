// db.js
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";

dotenv.config();
const url = 'mongodb://127.0.0.1:27017'; // process.env.DB_CON_STRING;
const dbName = 'Agro';

let db = null;

const connectDB = async () => {
  try {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName);
    console.log('MongoDB connected...');

    // Define schema validation rules
    const validationSchema = {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "quantity", "price"],
        properties: {
          name: {
            bsonType: "string",
            description: "Item name is required and must be a string"
          },
          quantity: {
            bsonType: "int",
            minimum: 0,
            description: "Quantity is required and must be a non-negative integer"
          },
          price: {
            bsonType: "double",
            minimum: 0,
            description: "Price is required and must be a non-negative number"
          },
          description: {
            bsonType: "string",
            description: "Description is optional and must be a string"
          }
        }
      }
    };

    try {
      // Attempt to create the collection with validation
      await db.createCollection('items', {
        validator: validationSchema,
        validationAction: 'warn' // or 'error' to reject invalid documents
      });
      console.log('Collection created');
    } catch (error) {
      if (error.codeName === 'NamespaceExists') {
        // Collection already exists
        console.log('Collection already exists');
      } else {
        // Handle other errors
        console.log({ error });
        throw error;
      }
    }

  } catch (err) {
    console.error(err.message);
    console.log({ err });
    process.exit(1);
  }
};

const getDB = () => db;

export {
  connectDB,
  getDB
};