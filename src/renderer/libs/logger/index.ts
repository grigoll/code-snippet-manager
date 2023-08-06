import log, { Logger } from 'loglevel';

// For production app we'd setup services like Sentry/Datadog to monitor the app, but for now console will do
log.setLevel(process.env.NODE_ENV === 'development' ? 'debug' : 'error');

export type { Logger };

export const logger = log;
