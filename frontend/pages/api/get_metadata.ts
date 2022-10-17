import { NextApiHandler } from "next";
import { ManagementClient } from "auth0";

const get_metadata_handler: NextApiHandler = async (req, res) => {
  const { id, token } = req.body;

  const mgm_api = new ManagementClient({
    token,
    domain: process.env.AUTH0_DOMAIN,
  });

  const user = await mgm_api.getUser({ id });

  res.json(user.user_metadata);
};

export default get_metadata_handler;