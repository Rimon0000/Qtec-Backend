import dotenv from "dotenv"
import path from "path"

dotenv.config({path: path.join((process.cwd(), '.env'))})

export const config = {
    port: process.env.PORT,
    database_url: process.env.MONGODB_DATABASE
}