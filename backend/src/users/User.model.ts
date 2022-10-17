import { model, Schema, Document } from "mongoose";

export interface UserDocument extends Document {

  role: "client" | "producer";

  name: string;
  mail?: string;

  ca?: string;

  telephone: string;
  numberEA?: string;

  description?: string;

  orders?: string[]; // push the carts info
  user_id: string;

}

const schema = new Schema({

  role: { type: String, required: true },

  name: { type: String, required: true },
  mail: { type: String },

  ca: { type: String },

  telephone: { type: String, required: true },
  numberEA: { type: String },

  description: { type: String },

  orders: [{ type: String }],
  user_id: { type: String },



}, { timestamps: true })

export const UserModel = model<UserDocument>("user", schema)