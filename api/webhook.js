export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { data } = req.body;

  if (!data || typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid input. Expected a string in "data" field.' });
  }

  const sortedArray = data.split('').sort();
  return res.status(200).json({ word: sortedArray });
}
