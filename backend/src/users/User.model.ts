import { model, Schema, Document } from "mongoose";

interface UserDocument extends Document {

  // shared props
  name: string;
  mail: string;
  client: boolean;
  telephone: string;
  creditCard: string; // save as ********0987 
  location: string;
  orders: string[]; // push the carts info

  // producres specific props
  ca: string;
  numberEA: string;
  description: string;

}

const schema = new Schema ({

  name: { type:String, required:true },
  mail: { type:String, required:true },
  telephone: { type:String, required:true },
  creditCard: { type:String }, 
  location: { type:String },
  orders: [{ type:String }], 
  ca: { type:String, required:true },
  numberEA: { type:String, required:true },
  description: {type:String}

}, {timestamps: true})

export const UserModel = model<UserDocument>("user", schema)