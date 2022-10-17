import { FastifyPluginAsync } from "fastify";
import { ProductModel } from "../Product.model";


export const list_product: FastifyPluginAsync = async (app) => {
  app.log.info("List product plugin loaded")

  app.get<{Querystring:{user_id?:string}}>("/",async(req,res)=> {


    let query = {}
    const { user_id } = req.query;

    // filter by user_id
    if(user_id){
      query = {
        $and:[
          {user_id},
          {user_id:{$exists:true}}
        ]
      }
    }

    console.log(query)


    const product_documents = await ProductModel.find(query) 

    return product_documents
  })
}

// export const list_product: FastifyPluginAsync = async (app) => {
//   app.log.info("List product plugin loaded")

//   app.get("/",async(req,res)=> {
//     const product_documents = await ProductModel.find() 

//     return product_documents
//   })

// }