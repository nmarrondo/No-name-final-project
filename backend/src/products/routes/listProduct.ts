import { FastifyPluginAsync } from "fastify";
import { ProductModel } from "../Product.model";


export const list_product: FastifyPluginAsync = async (app) => {
  app.log.info("List product plugin loaded")

  app.get("/",async(req,res)=> {
    const product_documents = await ProductModel.find() 

    return product_documents
  })

}