import { logger, loggerMiddleware } from "@utils/logger";
import express from "express";

const PORT = process.env.PORT ?? "3000";

const app = express();
let healthCheckEnabled = true;

// Middlewares
app.use(loggerMiddleware);

// Routes
app.get("/health-check", (_req, res) => {
  if (healthCheckEnabled) {
    res.send("OK");
  } else {
    res.status(503).send("Server shutting down");
  }
});

const server = app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

function shutdownHandler(signal: NodeJS.Signals) {
  console.info(`Received ${signal}, shutting down gracefully...`);
  healthCheckEnabled = false;
  server.close(() => {
    console.info("Server has been shut down successfully");
    process.exit(0);
  });
}

process.on("SIGINT", shutdownHandler);
process.on("SIGTERM", shutdownHandler);
