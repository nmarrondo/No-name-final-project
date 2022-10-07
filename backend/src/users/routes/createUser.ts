import { FastifyPluginAsync } from "fastify";
import { UserDocument, UserModel } from "../User.model";

export const create_user:FastifyPluginAsync = async (app) => {
  app.log.info("Create user plugin loaded")
  
  app.post<{Body: UserDocument}>("/", async(req,res)=>{

    const data = req.body

    const doc = await UserModel.create({
      // producer: data.producer,
      name: data.name,
      // description: data.description,
      // expiration: data.expiration,
      // quantity: data.quantity,
      // price: data.price,
      // buyer: data.buyer,
    })

    return doc
  })
}