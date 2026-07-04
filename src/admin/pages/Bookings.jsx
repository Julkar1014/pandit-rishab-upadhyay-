import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Bookings.css";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
const [selectedBooking, setSelectedBooking] = useState(null);

const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await api.get("/bookings");

      setBookings(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bookings-page">

      <h1>Bookings</h1>

      {loading ? (

        <div className="loading-box">
          Loading...
        </div>

      ) : (

        <div className="bookings-table-wrapper">

          <table className="bookings-table">

            <thead>

              <tr>

                <th>ID</th>

                <th>Name</th>

                <th>Phone</th>

                <th>Puja</th>

                <th>Date</th>

                <th>Status</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr key={booking.id}>

                  <td>{booking.id}</td>

                  <td>{booking.name}</td>

                  <td>{booking.phone}</td>

                  <td>{booking.puja_name}</td>

                  <td>{booking.booking_date}</td>

                  <td>

                    <span
                      className={`status-badge status-${booking.status?.toLowerCase()}`}
                    >
                      {booking.status}
                    </span>

                  </td>

                  <td>

                   <div className="action-buttons">
  <button
  className="details-btn"
  onClick={() => {
    setSelectedBooking(booking);
    setShowDetails(true);
  }}
>
  Details
</button>
</div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>
{showDetails && selectedBooking && (

  <div
    className="booking-modal-overlay"
    onClick={() => setShowDetails(false)}
  >

    <div
      className="booking-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <h2>Booking Details</h2>

      <button
        className="close-modal"
        onClick={() => setShowDetails(false)}
      >
        ✕
      </button>
      <div className="booking-details-grid">

  <div className="detail-item">
    <span>Name</span>
    <strong>{selectedBooking.customer_name}</strong>
  </div>

  <div className="detail-item">
    <span>Phone</span>
    <strong>{selectedBooking.phone}</strong>
  </div>

  <div className="detail-item">
    <span>Email</span>
    <strong>{selectedBooking.email || "Not Provided"}</strong>
  </div>

  <div className="detail-item">
    <span>Puja</span>
    <strong>{selectedBooking.puja_name}</strong>
  </div>

  <div className="detail-item">
    <span>Booking Date</span>
    <strong>{selectedBooking.booking_date}</strong>
  </div>

  <div className="detail-item">
    <span>Preferred Time</span>
    <strong>{selectedBooking.booking_time}</strong>
  </div>

  <div className="detail-item">
    <span>State</span>
    <strong>{selectedBooking.state}</strong>
  </div>

  <div className="detail-item">
    <span>City</span>
    <strong>{selectedBooking.city}</strong>
  </div>

  <div className="detail-item">
    <span>Pincode</span>
    <strong>{selectedBooking.pincode}</strong>
  </div>

  <div className="detail-item full-width">
    <span>Address</span>
    <strong>{selectedBooking.address}</strong>
  </div>

  <div className="detail-item full-width">
    <span>Landmark</span>
    <strong>{selectedBooking.landmark || "Not Provided"}</strong>
  </div>

  <div className="detail-item full-width">
    <span>Special Requirements</span>
    <strong>{selectedBooking.requirements || "None"}</strong>
  </div>

</div>

    </div>

  </div>

)}
        </div>

      )}

    </div>
  );
}    