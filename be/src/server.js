const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const reviewController = require('./reviewController');

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/api/reviews', reviewController.addReview);
app.get('/api/reviews', reviewController.getAllReviews);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
