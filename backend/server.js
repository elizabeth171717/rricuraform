const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");



// Load environment variables
dotenv.config();


// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// ✅ CORS Configuration
const allowedOrigins = [
  "https://rricuraform-1.onrender.com", // ✅ Your deployed frontend
  "http://localhost:5173" // ✅ Local development
];

app.use(cors({
  origin: allowedOrigins, // Allow only these origins
  methods: ["GET", "POST"], // Allow specific request methods
  allowedHeaders: ["Content-Type"] // Allow specific headers
}));




// Routes
app.use("/api/orders", require("./routes/orderRoutes"));


// Test route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
