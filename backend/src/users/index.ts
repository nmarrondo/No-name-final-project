import { FastifyPluginAsync } from "fastify";
import { create_user } from "./routes/createUser";
import { list_user } from "./routes/listUser";
import { detail_user } from "./routes/detailUser";
import { filter_ID_user } from "./routes/filterIdUser";

export const users_plugin: FastifyPluginAsync = async (app) => {

  app.register(create_user)
  app.register(list_user)
  app.register(detail_user)
  app.register(filter_ID_user)
}