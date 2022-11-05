
module.exports = (router) => {
    router.prefix('/v1')
    router.use('/todos', require('./todos'))
    router.use('/wishes', require('./wishes'))
    router.use('/delivery-places', require('./delivery_places'))
  }