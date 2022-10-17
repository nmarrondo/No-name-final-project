import { FastifyPluginAsync } from "fastify";
import { UserModel } from "../User.model";


export const filter_ID_user: FastifyPluginAsync = async (app) => {
  app.log.info("ID user plugin loaded")

  app.get<{ Params: { user_id?: string } }>("/id/:user_id", async (req, res) => {


    let query = {}
    const { user_id } = req.params;

    // filter by user_id
    if (user_id) {
      query = {
        $and: [
          { user_id },
          { user_id: { $exists: true } }
        ]
      }
    }

    console.log(query)
    console.log(user_id)


    const user_doc = await UserModel.findOne(query)
    if (user_doc) {
      return user_doc
    } else {
      res.status(404);
      return { error: 'user_id not found' }
    }
  })
}