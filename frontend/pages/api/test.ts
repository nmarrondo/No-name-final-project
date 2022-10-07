import { NextApiHandler } from "next";
import { getAccessToken } from "@auth0/nextjs-auth0"


const api_route:NextApiHandler = async(req,res) => {
  const token = await getAccessToken(req, res)
  res.json({
    status: "OK",
    token
  })
}

export default api_route