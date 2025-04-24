import express from 'express';
import { addProduct, changeStock, productById, productList } from '../controllers/productController.js';
import authSeller from '../middlewares/authSeller.js';
import { upload } from '../configs/multer.js';

const productRouter = express.Router();

productRouter.post('/add', upload.array(['images']), authSeller, addProduct)
productRouter.get('/list', productList)
productRouter.get('/id', productById)
productRouter.post('/stock', authSeller, changeStock)

export default productRouter;