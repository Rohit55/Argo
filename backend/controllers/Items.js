// const Item = require('../models/Item');

const items = [
  { _id: '1', name: 'pens', quantity: 3 },
  { _id: '2', name: 'Books', quantity: 3 }
];
const newItem = items;
const updatedItem = items;

const getItems = async (req, res) => {
  // const items = await Item.find();
  res.status(200).json(items);
};

const createItem = async (req, res) => {
  // const newItem = new Item(req.body);
  // await newItem.save();
  res.status(200).json(newItem);
};

const updateItem = async (req, res) => {
  // const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedItem);
};

const deleteItem = async (req, res) => {
  // await Item.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'Item deleted' });
};

export {
  getItems,
  createItem,
  updateItem,
  deleteItem
};