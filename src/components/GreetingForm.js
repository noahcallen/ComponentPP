'use client';

import PropTypes from 'prop-types';

function GreetingForm({ recipient, message, setRecipient, setMessage }) {
  return (
    <div>
      {/* Input for recipient name */}
      <div className="mb-3">
        <label htmlFor="recipient" className="form-label">
          Recipient Name
        </label>
        <input
          type="text"
          className="form-control"
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)} // onChange to update recipient state
        />
      </div>

      {/* Input for the message */}
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // onChange to update message state
         />
      </div>
    </div>
  );
}

// Adding PropTypes validation
GreetingForm.propTypes = {
  recipient: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  setRecipient: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};

export default GreetingForm;
