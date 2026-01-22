import * as dotenv from 'dotenv'

dotenv.config()
const appConfig = {
    PORT: Number(process.env.PORT!),
    MONGO_URI: process.env.MONGO_URI!,
};

export default appConfig;
