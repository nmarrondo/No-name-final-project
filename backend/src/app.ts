import { FastifyPluginAsync } from "fastify";
import { products_plugin } from "./products"
import { users_plugin } from "./users";
import blipp from "fastify-blipp"
import mongoose from "mongoose";
import { DBURL } from "./config";
import cors from "@fastify/cors"
import fastifyAuth0 from "fastify-auth0-verify";


export const app:FastifyPluginAsync = async (app) => {
  app.log.info("app starting")

  mongoose.connect(DBURL).then(() => {
    app.log.info("Database connected!")
  })

  await app.register(cors, {origin: "http://localhost:3000"})
  await app.register(blipp)
  await app.register(fastifyAuth0,{
    domain: "the-good-shop-app.eu.auth0.com", 
    audience:"https://the-good-shop-app.eu.auth0.com/api/v2/"
  })

  
  await app.register(products_plugin, {prefix: "/products"})
  await app.register(users_plugin, {prefix: "/users"})

  app.get("/",{ preValidation: app.authenticate }, (req,res) => {

    return {welcome:"to the good shop", user: req.user}
  })

  app.blipp()
}