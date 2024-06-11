import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import connectDB from "./src/config/db.js";
import swagger from "./src/config/swagger.js";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import configureRoutes from "./src/routes/routes.js";

// Load environment variables from .env file
dotenv.config();
const port = process.env.PORT || 3002;
const hostname = process.env.HOST || "localhost";
// Create Express app
const app = express();
// Use the cors() middleware to enable CORS support
app.use(cors());

/**
 * Use Morgan for HTTP request and response logging
 * In a production environment, "combined" or "common" might be more suitable for comprehensive logging while serving requests.
 **/
app.use(morgan(process.env.LOGGING_FORMAT || "dev"));

// Set view engine to 'ejs'
app.set("view engine", "ejs");
// Set view path
app.set("views", "./src/views");

// Import MongoDB connection and establish the database connection
connectDB();

// Rendering index page when accessing the root URL
app.get("/", (req, res) => {
  res.render("index");
});

// Middleware to handle JSON data only for a specific route
app.use(bodyParser.json());
// Set up middleware to parse incoming JSON and urlencoded data
app.use(express.urlencoded({ extended: false }));

// Set up Swagger API documentation
const specs = swaggerJsdoc(swagger);
app.use(
  "/api/documentation",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

/**
 * Configure The Routes
 */
configureRoutes(app);

// Set the folders as the location for serving static files
app.use("/assets/uploads", express.static("assets/uploads"));
app.use("/public", express.static("public"));

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

export default app;
