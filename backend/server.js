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
  "http://localhost:5173", // ✅ Local development
  "https://rricuraform.onrender.com", // ✅ Backend URL (for safety)
  "https://rricuraform.online" // ✅ Your custom domain
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "OPTIONS"], // Allow specific request methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
}));

// ✅ Import Routes
const orderRoutes = require("./routes/orderRoutes");
const { sendOrderProcessingEmail } = require("./controllers/emailController"); // ✅ Import email function

// ✅ Use Routes
app.use("/api/orders", orderRoutes);
app.post("/api/send-email", sendOrderProcessingEmail); // ✅ Add email route

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// ✅ Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
