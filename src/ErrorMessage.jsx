import React from "react";

const ErrorMessage = ({ error }) => (
  <div data-testid="error">Hi! A error occured: {error.toString()}</div>
);

export default ErrorMessage;
