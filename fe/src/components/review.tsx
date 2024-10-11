import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewSection: React.FC = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [newReview, setNewReview] = useState<string>('');
  const [floatingReviews, setFloatingReviews] = useState<any[]>([]);

  useEffect(() => {
    // Fetch all reviews when the component mounts
    axios
      .get('http://localhost:5000/api/reviews')
      .then((response) => {
        const reviewsData = response.data;
        setReviews(reviewsData);
        setFloatingReviews(
          reviewsData.map((review: any) => ({
            ...review,
            top: `${Math.random() * 80}%`, // Random top position
            left: `${Math.random() * 80}%`, // Random left position
          }))
        );
      })
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  const submitReview = () => {
    axios
      .post('http://localhost:5000/api/reviews', { review: newReview })
      .then((response) => {
        const newReviewData = {
          ...response.data,
          top: `${Math.random() * 80}%`,
          left: `${Math.random() * 80}%`,
        };
        setFloatingReviews([newReviewData, ...floatingReviews]);
        setNewReview(''); // Clear input
      })
      .catch((error) => console.error('Error submitting review:', error));
  };

  return (
    <section className="relative py-16 bg-black text-white overflow-hidden h-[500px]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
          Reviews
        </h2>
      </div>

      {/* Review Form */}
      <form className="flex flex-col items-center mb-8">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          className="w-full max-w-md p-4 rounded-lg bg-gray-800 border border-gray-600 mb-4"
          rows={4}
        />
        <div className="mt-4">
          <button
            type="button"
            onClick={submitReview}
            className="relative bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
          >
            {/* Animated Gradient Border */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 rounded-full blur-lg transition duration-300"></span>

            {/* Button Text */}
            <span className="relative text-sm font-semibold">Submit Review</span>
          </button>
        </div>
      </form>

      {/* Floating Reviews */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingReviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-4 rounded-lg shadow-md absolute animate-float"
            style={{
              top: review.top,
              left: review.left,
            }}
          >
            {/* Change text color to white */}
            <span className="text-white">
              {review.review}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
