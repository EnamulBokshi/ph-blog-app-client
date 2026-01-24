import {createEnv} from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
    // server related, secrete keys should be include here
    server: {
        API_URL: z.url(),
        AUTH_URL: z.url(),
    },
    client: {},
    runtimeEnv: {
        AUTH_URL: process.env.AUTH_URL,
        API_URL: process.env.API_URL
    }
})