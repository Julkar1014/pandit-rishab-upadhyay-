import "../styles/Reviews.css";
import { useEffect, useState } from "react";
import api from "../admin/services/api";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
const [showForm, setShowForm] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  city: "",
  rating: 5,
  review: "",
});

  useEffect(() => {
    fetchReviews();
  }, []);
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await api.post("/reviews", formData);

    alert(
      "🙏 Thank you! Your review has been submitted successfully. It will appear after admin approval."
    );

    setFormData({
      name: "",
      city: "",
      rating: 5,
      review: "",
    });

    setShowForm(false);

  } catch (err) {
    console.log(err);
    alert("Something went wrong.");
  }
};

  const fetchReviews = async () => {
    try {
      const res = await api.get("/reviews/website");
      setReviews(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="reviews-page">
      <div className="reviews-container">

        <div className="reviews-header">
          <h1>Customer Reviews</h1>
          <p>
            Read what our devotees say about our puja services.
          </p>
        </div>

        {loading ? (
          <p className="loading-box">Loading...</p>
        ) : (
          <>
            <div className="reviews-list">

              {reviews.length === 0 ? (
                <div className="empty-state">
                  <h2>No Reviews Yet</h2>
                  <p>
                    Be the first customer to share your experience.
                  </p>
                </div>
              ) : (
                                reviews.slice(0, 3).map((review) => (
                  <div className="review-card" key={review.id}>

                    <div className="stars">
                      {"⭐".repeat(review.rating)}
                    </div>

                    <h3>{review.name}</h3>

                    <p className="review-city">
                      {review.city}
                    </p>

                    <p className="review-text">
                      {review.review}
                    </p>

                  </div>
                ))
              )}

            </div>

            <div className="review-actions">

              {reviews.length > 3 && (
                <button className="view-btn">
                  View All Reviews
                </button>
              )}

              <button
                className="add-review-btn"
                onClick={() => setShowForm(true)}
              >
                + Add Review
              </button>

            </div>

          </>
        )}

      </div>

      {showForm && (
        <div
          className="review-modal-overlay"
          onClick={() => setShowForm(false)}
        >
          <div
            className="review-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <h2>Add Your Review</h2>

            <button
              className="close-modal"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <form
              className="review-form"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />

              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              >
                <option value="5">5 ⭐</option>
                <option value="4">4 ⭐</option>
                <option value="3">3 ⭐</option>
                <option value="2">2 ⭐</option>
                <option value="1">1 ⭐</option>
              </select>

              <textarea
                rows="5"
                name="review"
                placeholder="Write your review..."
                value={formData.review}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="submit-review-btn"
              >
                Submit Review
              </button>

            </form>

          </div>
        </div>
      )}

    </section>
  );
}