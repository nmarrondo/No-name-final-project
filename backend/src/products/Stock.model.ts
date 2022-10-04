import { model, Schema, Document } from "mongoose";

interface StockDocument extends Document {}

const schema = new Schema ({}, {timestamps: true})

export const StockModel = model<StockDocument>("stock", schema)
