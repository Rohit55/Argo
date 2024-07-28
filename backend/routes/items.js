import express from "express";
import { createItem, deleteItem, getItems, updateItem } from "../controllers/Items.js";


const router = express.Router();


router.get('/items', getItems);
router.post('/items', createItem);
router.put('/items', updateItem);
router.delete('/item', deleteItem);

export default router;
