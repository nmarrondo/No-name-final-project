import { FastifyPluginAsync } from "fastify";
import { create_product } from "./routes/createProduct";
import { list_product } from "./routes/listProduct";

export const products_plugin: FastifyPluginAsync = async (app) => {


  app.register(create_product)
  app.register(list_product)

}