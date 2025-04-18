import chalk from "chalk";

export const getColoredLog = (log) => {
  switch (log.level) {
    case "info":
      return `${chalk.blue(`[INFO]`)} ${log.message}`;
    case "warn":
      return `${chalk.yellow(`[WARN]`)} ${log.message}`;
    case "error":
      return `${chalk.red(`[ERROR]`)} ${log.message}`;
    default:
      return `[${level.toUpperCase()}] ${log.message}`;
  }
};
