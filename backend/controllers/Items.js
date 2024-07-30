import { ObjectId } from "mongodb";
import { getDB } from "../db.js";

const getItems = async (req, res) => {
  try {
    const db = getDB();
    const items = await db.collection('items').find().toArray();
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const createItem = async (req, res) => {
  try {
    const db = getDB();
    const item = await db.collection('items').insertOne(req.body);
    res.status(201).json({ id: item.insertedId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const db = getDB();
    const success = await db.collection('items').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    if (!success.modifiedCount) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({ message: 'Item updated' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const db = getDB();
    const success = await db.collection('items').deleteOne({ _id: new ObjectId(req.params.id) });
    if (!success.deletedCount) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export {
  getItems,
  createItem,
  updateItem,
  deleteItem
};