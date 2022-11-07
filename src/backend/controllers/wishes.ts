import Wish from '../models/wish'
 
export default class WishController
{
    static async findAll(ctx) {
        // Fetch all Wishes from the database and return as payload
        const wishes = await Wish.find({})
        ctx.body = wishes
    }

    static async updateGiver(ctx) {
        const wish = await Wish.findById(ctx.request.body._id)

        if (!wish || wish.locked){
            ctx.body = null
            ctx.status = 205
        } else {
            wish.giver = ctx.request.body.giver
            wish.locked = true
            const updatedWish = await wish.save()
            ctx.body = updatedWish
        }
    }
}
 