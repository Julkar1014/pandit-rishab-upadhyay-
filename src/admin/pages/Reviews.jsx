import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Reviews.css";

export default function Reviews() {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedReview, setSelectedReview] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await api.get("/reviews");
      setReviews(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const approveReview = async (id) => {
    try {
      await api.put(`/reviews/${id}`, {
        status: "Approved",
      });

      fetchReviews();

    } catch (err) {
      console.log(err);
    }
  };

  const deleteReview = async (id) => {

    if (!window.confirm("Delete this review?")) return;

    try {

      await api.delete(`/reviews/${id}`);

      fetchReviews();

    } catch (err) {

      console.log(err);

    }

  };

  const openReview = (review) => {
    setSelectedReview(review);
    setShowModal(true);
  };

  return (

    <div className="reviews-page">

      <h1>Manage Reviews</h1>

      {loading ? (

        <div className="loading-box">
          Loading...
        </div>

      ) : (

        <div className="reviews-table-wrapper">

          <table className="reviews-table">

            <thead>

              <tr>

                <th>ID</th>

                <th>Name</th>

                <th>Puja</th>

                <th>Rating</th>

                <th>Review</th>

                <th>Status</th>

                <th>Date</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>
                            {reviews.map((review) => (

                <tr key={review.id}>

                  <td>{review.id}</td>

                  <td>{review.name}</td>

                  <td>{review.puja_name || "-"}</td>

                  <td>

                    <span className="rating-badge">
                      ⭐ {review.rating}/5
                    </span>

                  </td>

                  <td className="review-text">

                    {review.review.length > 70 ? (

                      <>
                        {review.review.substring(0, 70)}...

                        <span
                          className="read-more"
                          onClick={() => openReview(review)}
                        >
                          Read More
                        </span>
                      </>

                    ) : (

                      review.review

                    )}

                  </td>

                  <td>

                    <span
                      className={`status-badge status-${review.status?.toLowerCase()}`}
                    >
                      {review.status}
                    </span>

                  </td>

                  <td>

                    {new Date(review.created_at).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}

                  </td>

                  <td>

                    <div className="action-buttons">

                      {review.status === "Pending" ? (

                        <button
                          className="approve-btn"
                          onClick={() => approveReview(review.id)}
                        >
                          Approve
                        </button>

                      ) : (

                        <button
                          className="approved-btn"
                          disabled
                        >
                          Approved ✓
                        </button>

                      )}

                      <button
                        className="delete-btn"
                        onClick={() => deleteReview(review.id)}
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}
            {showModal && selectedReview && (

        <div
          className="review-modal-overlay"
          onClick={() => setShowModal(false)}
        >

          <div
            className="review-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-modal"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2>Customer Review</h2>

            <div className="review-details">

              <p>
                <strong>Name :</strong> {selectedReview.name}
              </p>

              <p>
                <strong>Puja :</strong> {selectedReview.puja_name || "-"}
              </p>

              <p>
                <strong>Rating :</strong>{" "}
                {"⭐".repeat(selectedReview.rating)}
              </p>

              <p>
                <strong>Status :</strong> {selectedReview.status}
              </p>

              <p>
                <strong>Date :</strong>{" "}
                {new Date(selectedReview.created_at).toLocaleDateString(
                  "en-IN",
                  {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </p>

              <hr />

              <p className="full-review">
                {selectedReview.review}
              </p>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}