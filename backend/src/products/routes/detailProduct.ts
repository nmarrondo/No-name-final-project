import { FastifyPluginAsync } from "fastify";
import { ProductModel } from "../Product.model";

export const detail_product: FastifyPluginAsync = async (app) => {
  app.log.info("Product detail plugin loaded")

  app.get<{Params: {product_id:string}}>(
    "/:product_id",
    async (req, res) => {
      const product_doc = await ProductModel.findById(req.params.product_id);

      return product_doc
    }
  )
}