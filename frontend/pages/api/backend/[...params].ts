import { getAccessToken } from "@auth0/nextjs-auth0";
import { NextApiHandler } from "next";

const api_route: NextApiHandler = async (req, res) => {
  const token = await getAccessToken(req, res);
  const params = req.query.params as string[];
  const path = params.join("/");

  // const url = "http://localhost:5000/" + path;
  const url = "http://127.0.0.1:5000/" + path;

  try {
    let options = {
      method: req.method,
      body: req.body? JSON.stringify(req.body):undefined,
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        "Content-Type": req.headers["content-type"]
      },
    }

    const res_api = await fetch(url, options);
    res.status(res_api.status)
    res.json(await res_api.json());
  } catch (e) {
    res.status(500)
    res.json({message: e.toString()})
  }
};

export default api_route;