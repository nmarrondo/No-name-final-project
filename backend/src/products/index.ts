import { FastifyPluginAsync } from "fastify";
import { create_product } from "./routes/createProduct";
import { list_product } from "./routes/listProduct";
import { detail_product } from "./routes/detailProduct";
import { delete_product } from "./routes/deleteProduct";


export const products_plugin: FastifyPluginAsync = async (app) => {

  app.register(delete_product)
  app.register(create_product)
  app.register(list_product)
  app.register(detail_product)

}