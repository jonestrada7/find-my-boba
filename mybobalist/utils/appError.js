class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // Parent class automatically sets message property

    this.statusCode = statusCode;
    // '?' : ternary: one line if statement
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // Operational errors

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
