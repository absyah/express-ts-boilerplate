import express from 'express'
import * as IndexDelivery from '../deliveries/index_delivery'
const router = express.Router()

router.get('/', IndexDelivery.getIndex)

export { router as IndexRoute }
