/**
 *
 * @description Reports any thrown error to our error service example Sentry.
 * @function reportError
 * @property Error
 * @returns void
 */

export const reportError = (error: Error): void => {
  // Report error to external service like sentry or firebase crashlytics
  console.error('Reported Error to our external service:', error);
};
