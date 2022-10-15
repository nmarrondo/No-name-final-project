import { FastifyPluginAsync } from "fastify";
import { ProductDocument, ProductModel } from "../Product.model";

export const create_product: FastifyPluginAsync = async (app) => {
  app.log.info("Create product plugin loaded")

  app.post<{ Body: ProductDocument }>("/", async (req, res) => {

    const data = req.body

    const doc = await ProductModel.create({
      name: data.name,
      description: data.description,
      unit: data.unit,
      quantity: data.quantity,
      price: data.price,
      user_id: data.user_id
    })

    return doc
  }
  )
}


// export const create_product: FastifyPluginAsync = async (app) => {
//   app.log.info("Create product plugin loaded")

//   app.post<{ Body: ProductDocument }>(
//     "/",
//     { preValidation: app.authenticate },
//     async (req, res) => {

//       const data = req.body
//       const user = req.user

//       const doc = await ProductModel.create({
//         name: data.name,
//         description: data.description,
//         unit: data.unit,
//         quantity: data.quantity,
//         price: data.price,
//         user_id: user.sub,
//       })

//       return doc
//     }
//   )
// }