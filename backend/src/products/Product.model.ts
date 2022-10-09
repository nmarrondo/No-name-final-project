import { model, Schema, Document } from "mongoose";

export interface ProductDocument extends Document {
  
  // producer: string; // name of the producer who uploaded it
  name: string; // name of the product
  quantity: string; // quantity of product
  price: string; // price for kg
  expiration: string; // date?
  description?: string; // description of the product, generate an automatic if it has not been filled

  // buyer: string[]; // who bought
  // user_id: string; // add the user id to the product

}

const schema = new Schema ({

  // producer: { type:String, required:true },
  name: { type:String, required:true },
  quantity: { type:String, required:true},
  price: { type:String, required:true},
  expiration: { type:String, required:true},
  description: { type:String},
  // buyer: [{ type:String }],
  // user_id: {type:String, required:true },

}, {timestamps: true})

export const ProductModel = model<ProductDocument>("product", schema)

// really I dont need make difference between products/stock, 
// each upload is going to become a closed package becausue 
// it ll be diferenced by their produccer name, and expiration date, 
// if a producer upload a new product with this same values, 
// I can refresh the quantity, and the same if a client buy it.

// ** misconception -> to do