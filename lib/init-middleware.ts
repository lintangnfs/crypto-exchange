/* eslint-disable no-return-await */
import { ErrorCodes } from "@/consts";
import Cors from "cors";

const { host } = new URL(process.env.NEXT_PUBLIC_ROOT_DOMAIN);
const whitelist = [host];

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export default async function initMiddleware(req, res, corsOption = {}, allowAllOrigin = false) {

  const middleware = Cors({
    ...corsOption,
    ...(!allowAllOrigin ? { origin: whitelist } : {}),
  });
  return await new Promise((resolve, reject) => {

    middleware(req, res, (result) => {

      if (req.headers["api-key"] !== process.env.API_KEY) {

        return res.status(401).json(ErrorCodes[401]);

      }

      if (result instanceof Error) return reject(result);

      return resolve(result);

    });

  });

}
