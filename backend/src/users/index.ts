import { FastifyPluginAsync } from "fastify";
import { create_user } from "./routes/createUser";
import { list_user } from "./routes/listUser";

export const users_plugin: FastifyPluginAsync = async (app) => {
  app.register(create_user)
  app.register(list_user)
}