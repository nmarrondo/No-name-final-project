import { FastifyPluginAsync } from "fastify";
import { UserDocument, UserModel } from "../User.model";

export const create_user: FastifyPluginAsync = async (app) => {
  app.log.info("Create user plugin loaded")

  app.post<{ Body: UserDocument }>("/", async (req, res) => {

    const data = req.body

    const doc = await UserModel.create({

      role: data.role,

      name: data.name,
      mail: data.mail,

      ca: data.ca,

      telephone: data.telephone,
      numberEA: data.numberEA,

      description: data.description,
      orders: data.orders,
    })

    return doc
  })
}