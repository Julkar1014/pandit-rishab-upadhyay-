import { useState } from "react";
import "../styles/Settings.css";

export default function Settings() {

  const [form, setForm] = useState({

    websiteName: "",

    tagline: "",

    logo: "",

    favicon: "",

    phone: "",

    whatsapp: "",

    email: "",

    address: "",

    map: "",

    facebook: "",

    instagram: "",

    youtube: "",

    twitter: "",

    adminName: "",

    adminEmail: "",


  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({

      ...form,

      [name]: value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(form);

    alert("Settings Saved Successfully");

  };

  return (

    <div className="settings-page">

      <form
        className="settings-form"
        onSubmit={handleSubmit}
      >

        <h1>Website Settings</h1>

        <div className="settings-section">

          <h2>General Settings</h2>

          <div className="form-group">

            <label>Website Name</label>

            <input
              type="text"
              name="websiteName"
              value={form.websiteName}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Website Tagline</label>

            <input
              type="text"
              name="tagline"
              value={form.tagline}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Website Logo URL</label>

            <input
              type="text"
              name="logo"
              value={form.logo}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Favicon URL</label>

            <input
              type="text"
              name="favicon"
              value={form.favicon}
              onChange={handleChange}
            />

          </div>

        </div>
                <div className="settings-section">

          <h2>Contact Settings</h2>

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>WhatsApp Number</label>

            <input
              type="text"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Office Address</label>

            <textarea
              rows="3"
              name="address"
              value={form.address}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Google Map Link</label>

            <input
              type="text"
              name="map"
              value={form.map}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="settings-section">

          <h2>Social Media</h2>

          <div className="form-group">

            <label>Facebook URL</label>

            <input
              type="text"
              name="facebook"
              value={form.facebook}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Instagram URL</label>

            <input
              type="text"
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>YouTube URL</label>

            <input
              type="text"
              name="youtube"
              value={form.youtube}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Twitter (X) URL</label>

            <input
              type="text"
              name="twitter"
              value={form.twitter}
              onChange={handleChange}
            />

          </div>

        </div>
                <div className="settings-section">

          <h2>Admin Profile</h2>

          <div className="form-group">

            <label>Admin Name</label>

            <input
              type="text"
              name="adminName"
              value={form.adminName}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Admin Email</label>

            <input
              type="email"
              name="adminEmail"
              value={form.adminEmail}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="form-actions">

          <button
            type="submit"
            className="save-btn"
          >
            Save Settings
          </button>

        </div>

      </form>

    </div>

  );

}