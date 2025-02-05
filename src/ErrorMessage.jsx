import React from "react";

const ErrorMessage = ({ error }) => (
  <div data-testid="error">Hi! New error occured: {error.toString()}</div>
);

export default ErrorMessage;
