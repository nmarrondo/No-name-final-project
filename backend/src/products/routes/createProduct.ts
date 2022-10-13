import { FastifyPluginAsync } from "fastify";
import { ProductDocument, ProductModel } from "../Product.model";

export const create_product:FastifyPluginAsync = async (app) => {
  app.log.info("Create product plugin loaded")
  
  app.post<{Body: ProductDocument}>(
    "/",
    {preValidation: app.authenticate}, 
    async(req,res)=>{

      const data = req.body
      const user = req.user
      
      const doc = await ProductModel.create({
        // producer: data.producer,
        name: data.name,
        description: data.description,
        expiration: data.expiration,
        quantity: data.quantity,
        price: data.price,
        user_id: user.sub,
        // buyer: data.buyer,
      })

      return doc
    }
  )
}