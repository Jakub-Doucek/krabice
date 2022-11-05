 /* models/wish.ts */
 const mongoose = require('mongoose')
 
 // Declare Schema
 const WishSchema = new mongoose.Schema(
   {
     organization: { type: String },
     name: { type: String },
     description: { type: String },
     age: { type: String },
     giver: { type: String },
     locked: {type: Boolean }
   }, 
   { timestamps: true }
 );
 
 // Declare Model to mongoose with Schema
 const Wish = mongoose.model('Wish', WishSchema)
 
 // Export Model to be used in Node
export default mongoose.model('Wish')