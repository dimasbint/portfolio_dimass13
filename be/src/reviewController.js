const db = require('./db');

// Add a new review
exports.addReview = async (req, res) => {
  const { review } = req.body;

  if (!review) {
    return res.status(400).json({ error: 'Review content is required' });
  }

  try {
    const [result] = await db.query('INSERT INTO reviews (review) VALUES (?)', [review]);
    res.status(201).json({ id: result.insertId, review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM reviews ORDER BY created_at DESC');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
