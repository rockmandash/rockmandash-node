import { IS_PRODUCTION } from 'constant-land';

const prefix = 'Invariant failed';

// Throw an error if the condition fails
// Strip out error messages for production
// > Not providing an inline default argument for message as the result is smaller
function invariant(condition: any, message?: string): void {
  if (condition) {
    return;
  }
  // Condition not passed

  if (IS_PRODUCTION) {
    // In production we strip the message but still throw
    throw new Error(prefix);
  } else {
    // When not in production we allow the message to pass through
    // *This block will be removed in production builds*
    throw new Error(`${prefix}: ${message || ''}`);
  }
}

export default invariant;
