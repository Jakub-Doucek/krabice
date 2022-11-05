import Router from 'koa-router'
const router = new Router()
import TodoController from '../controllers/todos'

router.get('/', TodoController.findAll)
router.post('/', TodoController.create)
router.post('/:id', TodoController.update)
router.delete('/:id', TodoController.destroy)

module.exports = router.routes()