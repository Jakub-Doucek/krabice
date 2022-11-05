import { AddressSchema } from "./address.model"

/* models/todo.ts */
const mongoose = require('mongoose')

// Declare Schema
const DeliveryPlaceSchema = new mongoose.Schema(
    {
        name: { type: String },
        address: AddressSchema,
    },
    { timestamps: true }
);

// Declare Model to mongoose with Schema
const DeliveryPlace = mongoose.model('DeliveryPlace', DeliveryPlaceSchema)

// Export Model to be used in Node
export default mongoose.model('DeliveryPlace')
