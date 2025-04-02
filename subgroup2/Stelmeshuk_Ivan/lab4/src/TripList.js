export default function TripList({ trips }) {
  return (
    <div className="trip-list">
      {trips.length === 0 ? (
        <p>Пока нет путешествий</p>
      ) : (
        trips.map(trip => (
          <div key={trip.id} className="trip-item">
            <h2>{trip.title}</h2>
            <p>Дата: {trip.date}</p>
            <p>{trip.description || 'Без описания'}</p>
          </div>
        ))
      )}
    </div>
  );
}