import { FastifyPluginAsync } from "fastify";
import { UserModel } from "../User.model";


export const list_user: FastifyPluginAsync = async (app) => {
  app.log.info("List product plugin loaded")

  app.get("/",async(req,res)=> {
    const user_documents = await UserModel.find() 

    return user_documents
  })
}