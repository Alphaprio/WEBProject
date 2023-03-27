import express from 'express'
import { Product, Bid, User } from '../orm/index.js'
import authMiddleware from '../middlewares/auth.js'
import { getDetails } from '../validators/index.js'

const router = express.Router()

router.get('/api/products', async (req, res, next) => {
  /* const user = await User.findOne({
    attributes: ['id', 'username'],
    include: [{
        model: Product,
        as: 'product',
        attributes: ['sellerID'],
        where: { sellerId : user.id }
     }]
  }) */
  res.json(await Product.findAll({ 
    attributes: ['id', 'name', 'description', 'category','originalPrice', 'pictureUrl', 'endDate', 'sellerId']
  } ))
})

router.get('/api/products/:productId', async (req, res) => {
  res.json(await Product.findAll({ 
    attributes: ['id', 'name', 'description', 'category','originalPrice', 'pictureUrl', 'endDate', 'sellerId']
  } ))
})

// You can use the authMiddleware with req.user.id to authenticate your endpoint ;)

router.post('/api/products', async (req, res) => {
  if(req.user.id){
    try {   
      res.json(await Task.create(req.body))
      
    } catch (error) {
      res.status(400).json({ error })
      
    }
  }
})

router.put('/api/products/:productId', async (req, res) => {
  if(req.user.id){
    try {   
      res.json(await Task.create(req.body))
      
    } catch (error) {
      res.status(400).json({ error })
      
    }
  }
})

router.delete('/api/products/:productId', async (req, res) => {
  if(req.user.id){
    try {   
      res.json(await Task.create(req.body))
      
    } catch (error) {
      res.status(400).json({ error })
      
    }
  }
})

export default router
