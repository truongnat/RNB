import { consoleTransport, logger } from 'react-native-logs';

const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  severity: 'debug',
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
  async: true,
  dateFormat: 'time',
  printLevel: true,
  printDate: true,
  enabled: true,
};

const log = logger.createLogger(defaultConfig);

export class Logger {
  private _log: any = log;
  constructor(name: string) {
    this._log = log.extend(name);
  }
  debug = (...args: unknown[]) => {
    this._log.debug(args);
  };

  info = (...args: unknown[]) => {
    this._log.info(args);
  };

  warn = (...args: unknown[]) => {
    this._log.warn(args);
  };

  error = (...args: unknown[]) => {
    this._log.error(args);
  };
}
