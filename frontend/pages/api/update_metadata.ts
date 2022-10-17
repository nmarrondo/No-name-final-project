import { NextApiHandler } from "next";
import { ManagementClient } from "auth0";

const update_metadata_handler: NextApiHandler = async (req, res) => {
  const { id, metadata, token } = req.body;

  const mgm_api = new ManagementClient({
    token,
    domain: process.env.AUTH0_DOMAIN,
  });
  await mgm_api.updateUserMetadata({ id }, metadata);

  res.json({
    status: "updated_user",
  });
};

export default update_metadata_handler;