import { StateCreator, StoreMutatorIdentifier } from 'zustand';
import { logger } from 'renderer/libs/logger';

/**
 * @see https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#middleware-that-doesnt-change-the-store-type
 */

type LoggerMiddleware = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
  f: StateCreator<T, Mps, Mcs>,
  name?: string
) => StateCreator<T, Mps, Mcs>;

type LoggerMiddlewareImpl = <T>(
  f: StateCreator<T, [], []>,
  name?: string
) => StateCreator<T, [], []>;

const loggerMiddleware: LoggerMiddlewareImpl = (f) => (set, get, store) => {
  const loggedSet: typeof set = (...args) => {
    set(...args);
    logger.debug('[Store]', get());
  };

  store.setState = loggedSet;

  return f(loggedSet, get, store);
};

export const storeLoggerMiddleware =
  loggerMiddleware as unknown as LoggerMiddleware;
