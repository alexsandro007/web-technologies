let trips = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(trips);
  } else if (req.method === 'POST') {
    const trip = req.body;
    trip.id = Date.now();
    trips.push(trip);
    res.status(200).json(trip);
  } else {
    res.status(405).json({ message: 'Метод не поддерживается' });
  }
}