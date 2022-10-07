import { model, Schema, Document } from "mongoose";

export interface UserDocument extends Document {

  // shared props
  name: string;
  mail: string;
  telephone: string;
  // creditCard?: string; // save as ********0987 
  // location?: string;
  // orders?: string[]; // push the carts info
  // role: "client" | "producer";
  // user_id: string; // add the user id to the product
  


  // // producres specific props
  // ca?: string;
  // numberEA?: string;
  // description?: string;

}

const schema = new Schema ({

  name: { type:String, required:true },
  mail: { type:String, required:true },
  telephone: { type:String, required:true },
  // creditCard: { type:String }, 
  // location: { type:String },
  // orders: [{ type:String }], 
  // ca: { type:String},
  // numberEA: { type:String},
  // description: {type:String},
  // role: { type:String, required:true },
  // user_id: {type:String, required:true },


}, {timestamps: true})

export const UserModel = model<UserDocument>("user", schema)