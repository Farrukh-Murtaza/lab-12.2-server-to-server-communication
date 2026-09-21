import express from "express";
import funFactRoutes from "./routes/funFactRoutes.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", funFactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});