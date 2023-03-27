import express from 'express'
import { User, Product, Bid } from '../orm/index.js'

const router = express.Router()

router.get('/api/users/:userId', async (req, res) => {
  res.json(await Users.findAll({ 
    attributes: ['id','username','email','password','admin']
  } ))
})

export default router
