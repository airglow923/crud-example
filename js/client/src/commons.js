import { DEBUG } from './config';

/* eslint-disable */
const Console = DEBUG
  ? console
  : {
      assert: (...args) => {},
      clear: (...args) => {},
      count: (...args) => {},
      countReset: (...args) => {},
      debug: (...args) => {},
      dir: (...args) => {},
      dirxml: (...args) => {},
      error: (...args) => {},
      group: (...args) => {},
      groupCollapsed: (...args) => {},
      groupEnd: (...args) => {},
      info: (...args) => {},
      log: (...args) => {},
      table: (...args) => {},
      time: (...args) => {},
      timeEnd: (...args) => {},
      timeLog: (...args) => {},
      trace: (...args) => {},
      warn: (...args) => {}
    };

export { Console };
/* eslint-enable */
