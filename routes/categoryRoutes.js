import  express from "express";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";
import {isAdmin, requireSigniN} from './../middleware/authMiddleware.js'

const router = express.Router()


// routes
// create category 
router.post('/create-category', requireSigniN, isAdmin, createCategoryController);

// update category
router.put('/update-category/:id', requireSigniN, isAdmin, updateCategoryController);

// getAll category
router.get('/get-category', categoryController);

// single category
router.get('/single-category/:slug', singleCategoryController)

// delete catgory
router.delete('/delete-category/:id', requireSigniN, isAdmin, deleteCategoryController)

export default router