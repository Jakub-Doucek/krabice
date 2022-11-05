import * as Router from 'koa-router'
const router = new Router()
import WishController from '../controllers/wishes'

router.get('/', WishController.findAll)
router.post('/giver/', WishController.updateGiver)

module.exports = router.routes()