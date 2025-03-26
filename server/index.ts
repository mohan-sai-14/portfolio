import express from "express";
import { z } from "zod";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

// Routes
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    console.log("Contact form submission:", validatedData);
    res.status(200).json({
      success: true,
      message: "Your message has been received. Thank you for reaching out!"
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors
      });
    }
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your request. Please try again later."
    });
  }
});

app.post("/api/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address"
      });
    }
    console.log("Newsletter subscription:", email);
    res.status(200).json({
      success: true,
      message: "Thank you for subscribing to our newsletter!"
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your subscription. Please try again later."
    });
  }
});

// Error handling middleware
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  console.error("Server Error:", err);
});

// Development server
if (process.env.NODE_ENV === "development") {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Development server running on http://localhost:${port}`);
  });
}

export default app;
