import * as Router from 'koa-router'
const router = new Router()
import DeliveryPlacesController from '../controllers/delivery_places'

router.get('/', DeliveryPlacesController.findAll)
 router.post('/', DeliveryPlacesController.create)
// router.post('/:id', TodoController.update)
// router.delete('/:id', TodoController.destroy)

module.exports = router.routes()