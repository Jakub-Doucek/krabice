 /* models/todo.ts */
 const mongoose = require('mongoose')
 
// Declare Schema
export const AddressSchema = new mongoose.Schema(
    {
        street: { type: String },
        postalCode: { type: String },
        city: { type: String },
        psc: { type: String },
    },
    { timestamps: true }
);

// Declare Model to mongoose with Schema
const Address = mongoose.model('Address', AddressSchema)

// Export Model to be used in Node
export default mongoose.model('Address')