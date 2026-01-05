import dotenv from "dotenv";

dotenv.config();

const { PORT, MONGO_URL, JWT_SECRET, FLIGHT_API_KEY} = process.env;                  

export default {
    port: PORT,
    mongo_url: MONGO_URL,
    jwt_secret: JWT_SECRET,
    flight_api_key: FLIGHT_API_KEY
}