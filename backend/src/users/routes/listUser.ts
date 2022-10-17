import { FastifyPluginAsync } from "fastify";
import { UserModel } from "../User.model";


export const list_user: FastifyPluginAsync = async (app) => {
  app.log.info("List product plugin loaded")

  app.get<{Querystring:{role?:string; user_id?:string}}>("/",async(req,res)=> {
    

    let query = {}
    const { role } = req.query;

    // filter by role
    if(role && ['client', 'producer'].includes(role)){
      query = {
        ...query,
        role
      }
    }

    const { user_id } = req.query;

    // filter by id

    if(user_id){
      query = {
        $and:[
          {user_id},
          {user_id:{$exists:true}}]
      }
    }

    console.log('query AQUI')
    console.log(query)

    const user_documents = await UserModel.find(query) 

    return user_documents
  })
}


// export const list_user: FastifyPluginAsync = async (app) => {
//   app.log.info("List product plugin loaded")

//   app.get<{Querystring:{role?:string}}>("/",async(req,res)=> {
    

//     let query = {}
//     const { role } = req.query;

//     // filter by role
//     if(role && ['client', 'producer'].includes(role)){
//       query = {
//         ...query,
//         role
//       }
//     }

//     console.log(query)

//     const user_documents = await UserModel.find(query) 

//     return user_documents
//   })
// }