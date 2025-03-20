import { useState } from 'react';

export default function TripForm({ setTrips }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTrip = { title, date, description };

    const response = await fetch('/api/trips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrip),
    });

    if (response.ok) {
      const createdTrip = await response.json();
      setTrips(prev => [...prev, createdTrip]);
      setTitle('');
      setDate('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="trip-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название путешествия"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}