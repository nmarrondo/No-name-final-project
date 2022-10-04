import { FastifyPluginAsync } from "fastify";
import { ProductDocument, ProductModel } from "../Product.model";

export const create_product:FastifyPluginAsync = async (app) => {
  app.log.info("Create product plugin loaded")
  
  app.post<{Body: ProductDocument}>("/", async(req,res)=>{

    const data = req.body

    const doc = await ProductModel.create({
      // producer: data.producer,
      name: data.name,
      description: data.description,
      expiration: data.expiration,
      quantity: data.quantity,
      price: data.price,
      buyer: data.buyer,
    })

    return doc
  })
}