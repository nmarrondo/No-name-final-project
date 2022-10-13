import { model, Schema, Document } from "mongoose";

export interface UserDocument extends Document {

  role: "client" | "producer";

  name: string;
  mail?: string;

  ca?: string;

  telephone: string;
  account?: string; // save as ********0987 
  numberEA?: string;

  description?: string;
  
  location?: string;
  orders?: string[]; // push the carts info
  user_id: string;
  // user_id: string; // add the user id to the product



}

const schema = new Schema ({
  role: { type:String, required:true },

  name: { type:String, required:true },
  mail: { type:String},

  ca: { type:String},

  telephone: { type:String, required:true },
  account: { type:String }, 
  numberEA: { type:String},

  description: {type:String},

  location: { type:String },
  orders: [{ type:String }], 
  // user_id: {type:String, required:true },
  user_id: { type:String },



}, {timestamps: true})

export const UserModel = model<UserDocument>("user", schema)