export const logErrorWithCause = (error: Error & { cause?: Error }) => {
  recursivelyLogErrorWithCause(error, 0);
};

const recursivelyLogErrorWithCause = (error: Error & { cause?: Error }, level: number) => {
  if (error === undefined) {
    return;
  }

  console.log(`${level > 0 ? "Cause:" : ""} ${error.stack ?? error.message}`);

  recursivelyLogErrorWithCause(error.cause, level + 1);
};
