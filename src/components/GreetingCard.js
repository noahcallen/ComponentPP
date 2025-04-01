'use client';

import PropTypes from 'prop-types';

function GreetingCard({ recipient, message }) {
  return (
    <div className="card-body">
      <h5 className="card-title">Greeting Card</h5>
      <p className="card-text">
        {message}, {recipient}!
      </p>
      <button className="btn btn-primary" type="button">
        Send Greetings
      </button>{' '}
      {/* Added type="button" */}
    </div>
  );
}

// Adding PropTypes validation
GreetingCard.propTypes = {
  recipient: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default GreetingCard;
