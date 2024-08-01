import express from "express";
import { createItem, deleteItem, getItems, updateItem } from "../controllers/Items.js";


const router = express.Router();


router.get('/items', getItems);
router.post('/items', createItem);
router.put('/items/:id', updateItem);
router.delete('/item/:id', deleteItem);

export default router;
