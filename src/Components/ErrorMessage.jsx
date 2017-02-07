import React, { PropTypes } from 'react';

const ErrorMessage = props => (
  <div className="message-error">
    <p>{props.error}</p>
  </div>
);

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
