import { NextApiHandler } from "next";
import { getAccessToken } from "@auth0/nextjs-auth0"
import { ManagementClient } from "auth0"

const api_route:NextApiHandler = async(req,res) => {

  const user_id = req.query.user_id as string
  if(!user_id){
    throw new Error("user_id not found")
  }

  const config = {
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: "the-good-shop-app.eu.auth0.com",
    scope: "read:users",
    audience: 'https://the-good-shop-app.eu.auth0.com/api/v2/'
  }

  console.log(config)
  let mgm_client = new ManagementClient(config)

  const user_object = await mgm_client.getUser({id:user_id})

  res.json(user_object)
}

export default api_route