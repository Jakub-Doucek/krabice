import DeliveryPlaceModel from '../models/deliveryPlace.model'
 
export default class DeliveryPlacesController
{
    static async findAll(ctx) {
        const deliveryPlaces = await DeliveryPlaceModel.find({})
        ctx.body = deliveryPlaces
    }

    static async create(ctx) {
        const newDeliveryPlace = new DeliveryPlaceModel(ctx.request.body)
        const savedDeliveryPlace= await newDeliveryPlace.save()
        ctx.body = savedDeliveryPlace
    }
}
 