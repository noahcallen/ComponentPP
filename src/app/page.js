'use client';

import { useState } from 'react';
import GreetingCard from '../components/GreetingCard';
import GreetingForm from '../components/GreetingForm';

export default function Home() {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleGenerateCard = () => {
    setShowCard(true);
  };

  return (
    <div className="container mt-5">
      <h1>Greeting Card Generator</h1>

      {/* Pass recipient, message, setRecipient, and setMessage to the GreetingForm component */}
      <GreetingForm recipient={recipient} message={message} setRecipient={setRecipient} setMessage={setMessage} />

      {/* Button to generate greeting card */}
      <button className="btn btn-success mb-4" type="button" onClick={handleGenerateCard}>
        Generate Greeting Card
      </button>

      {/* Center the card and increase size */}
      {showCard && (
        <div className="d-flex justify-content-center mt-4">
          <div className="card" style={{ width: 'auto', fontSize: '1.25rem' }}>
            <GreetingCard recipient={recipient} message={message} />
          </div>
        </div>
      )}
    </div>
  );
}
