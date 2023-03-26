import express from 'express'
import {forgotPasswordController, getAllOrdersController, getOrdersController, loginController, orderStatusController, registerController, testController, updateProfileController} from '../controllers/authController.js'
import {isAdmin, requireSigniN } from '../middleware/authMiddleware.js';



// router object
const router = express.Router()

// routing
// Register || METHOD POST
router.post('/register', registerController);

// // login || POST
router.post('/login', loginController)

// // forgot password
router.post('/forgot-password', forgotPasswordController)

// // test routes
router.get('/test',requireSigniN,isAdmin ,testController)

// // protected user route auth
router.get('/user-auth', requireSigniN, (req,res) => {
    res.status(200).send({ok:true});
})
// // protected admin route auth
router.get('/admin-auth', requireSigniN,isAdmin, (req,res) => {
    res.status(200).send({ok:true});
})

// // update profile
router.put('/profile',requireSigniN,updateProfileController)

// orders
router.get('/orders', requireSigniN, getOrdersController)

// all orders
router.get('/all-orders', requireSigniN, isAdmin, getAllOrdersController)

// order status update
router.get('/order-status/:orderId',requireSigniN, isAdmin,orderStatusController)

export default router