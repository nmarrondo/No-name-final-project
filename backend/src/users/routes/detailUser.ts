import { FastifyPluginAsync } from "fastify";
import { UserModel } from "../User.model";

export const detail_user: FastifyPluginAsync = async (app) => {
  app.log.info("User detail plugin loaded")

  app.get<{Params: {user_id:string}}>(
    "/:user_id",
    async (req, res) => {
      const user_doc = await UserModel.findById(req.params.user_id);

      return user_doc
    }
  )
}