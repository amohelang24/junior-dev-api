﻿export default function handler(req, res) {
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
/ /   L a s t   u p d a t e d :   0 6 / 1 5 / 2 0 2 5   1 9 : 0 1 : 2 7  
 