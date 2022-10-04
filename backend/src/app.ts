import { FastifyPluginAsync } from "fastify";
import { products_plugin } from "./products"
import blipp from "fastify-blipp"
import mongoose from "mongoose";
import { DBURL } from "./config";


export const app:FastifyPluginAsync = async (app) => {
  app.log.info("app starting")

  mongoose.connect(DBURL).then(() => {
    app.log.info("Database connected!")
  })

  await app.register(blipp)
  await app.register(products_plugin, {prefix: "/products"})

  app.get("/", () => ({welcome:"to the good shop"}))
  app.blipp()
}