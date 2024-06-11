/**
 * CustomFileError class extends the built-in Error class
 */
export class CustomFileError extends Error {
  constructor(errors) {
    super(errors);
    // Assigns the 'errors' parameter to the 'errors' property of this instance
    // This allows access to the errors array within instances of CustomFileError
    this.errors = errors;
  }
}
