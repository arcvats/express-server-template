import type { LoggerOptions } from "pino";

import morgan from "morgan";
import { pino } from "pino";

const isDev = process.env.NODE_ENV === "development";

const defaultPinoOptions = {};

const devPinoOptions: LoggerOptions = {
  transport: {
    options: {
      colorize: true,
    },
    target: "pino-pretty",
  },
};

export const loggerMiddleware = isDev ? morgan("dev") : morgan("combined");
export const logger = isDev
  ? pino({ ...defaultPinoOptions, ...devPinoOptions })
  : pino(defaultPinoOptions);
