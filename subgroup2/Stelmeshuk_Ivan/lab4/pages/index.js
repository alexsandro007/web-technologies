import TripForm from '../src/TripForm'; // Путь изменён
import TripList from '../src/TripList'; // Путь изменён
import { useState, useEffect } from 'react';

export default function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('/api/trips')
      .then(res => res.json())
      .then(data => setTrips(data));
  }, []);

  return (
    <div className="container">
      <h1>Дневник путешественника</h1>
      <TripForm setTrips={setTrips} />
      <TripList trips={trips} />
    </div>
  );
}