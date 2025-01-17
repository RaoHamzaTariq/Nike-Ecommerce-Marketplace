

export function isClerkError(error: unknown): error is { errors: { message: string }[] } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'errors' in error &&
    Array.isArray((error as { errors: unknown }).errors) &&
    (error as { errors: { message: unknown }[] }).errors.every(
      (err) => typeof err.message === 'string'
    )
  );
}
