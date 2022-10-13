import { FastifyPluginAsync } from "fastify";
import { ProductModel } from "../Product.model";

export const delete_product: FastifyPluginAsync = async (app) => {
  app.log.info("Product delete plugin loaded ");

  app.delete<{ Params: { product_id: string } }>(
    "/:product_id",
    async (req, res) => {
      const product_doc = await ProductModel.findById(req.params.product_id);
      if (product_doc) {
        await product_doc.remove();
        return {
          status: "ok",
        };
      }
      res.status(404);
      return {
        status: "not-found",
      };
    }
  );
};