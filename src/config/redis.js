import Redis from "ioredis";
import { promisify } from "util";
import dotenv from "dotenv";

// load env values
dotenv.config();

// initiate redis
const client = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD || "",
});

// Promisify Redis functions to use async/await
const get = promisify(client.get).bind(client);
const set = promisify(client.set).bind(client);
const del = promisify(client.del).bind(client);

// Export the Redis client
export default {
  client,
  get,
  set,
  del
};
