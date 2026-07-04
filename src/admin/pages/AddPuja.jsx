import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import api from "../services/api";
import "../styles/AddPuja.css";

export default function AddPuja() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    slug: "",
    name: "",
    sanskrit: "",
    category: "",
    popular: false,
    image: "",
    tagline: "",
    intro: "",
    importance: "",
    muhurat: "",

    benefits: [],

    procedure_steps: [],

    samagri: [],

    faqs: [],
  });

  const addBenefit = () => {
    setForm({
      ...form,
      benefits: [...form.benefits, ""],
    });
  };

  const updateBenefit = (index, value) => {
    const updated = [...form.benefits];
    updated[index] = value;

    setForm({
      ...form,
      benefits: updated,
    });
  };

  const removeBenefit = (index) => {
    const updated = [...form.benefits];
    updated.splice(index, 1);

    setForm({
      ...form,
      benefits: updated,
    });
  };

  const addProcedure = () => {
    setForm({
      ...form,
      procedure_steps: [
        ...form.procedure_steps,
        {
          title: "",
          description: "",
        },
      ],
    });
  };

  const updateProcedure = (index, field, value) => {
    const updated = [...form.procedure_steps];

    updated[index][field] = value;

    setForm({
      ...form,
      procedure_steps: updated,
    });
  };

  const removeProcedure = (index) => {
    const updated = [...form.procedure_steps];

    updated.splice(index, 1);

    setForm({
      ...form,
      procedure_steps: updated,
    });
  };

  const addSamagri = () => {
    setForm({
      ...form,
      samagri: [...form.samagri, ""],
    });
  };

  const updateSamagri = (index, value) => {
    const updated = [...form.samagri];

    updated[index] = value;

    setForm({
      ...form,
      samagri: updated,
    });
  };

  const removeSamagri = (index) => {
    const updated = [...form.samagri];

    updated.splice(index, 1);

    setForm({
      ...form,
      samagri: updated,
    });
  };

  const addFAQ = () => {
    setForm({
      ...form,
      faqs: [
        ...form.faqs,
        {
          q: "",
          a: "",
        },
      ],
    });
  };

  const updateFAQ = (index, field, value) => {
    const updated = [...form.faqs];

    updated[index][field] = value;

    setForm({
      ...form,
      faqs: updated,
    });
  };

  const removeFAQ = (index) => {
    const updated = [...form.faqs];

    updated.splice(index, 1);

    setForm({
      ...form,
      faqs: updated,
    });
  };
   const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.slug.trim()) {
    alert("Slug is required");
    return;
  }

  if (!form.name.trim()) {
    alert("Name is required");
    return;
  }

  if (!form.sanskrit.trim()) {
    alert("Sanskrit Name is required");
    return;
  }

  if (!form.category.trim()) {
    alert("Category is required");
    return;
  }

 if (!id && !form.image) {
  alert("Please select an image.");
  return;
}

  if (!form.tagline.trim()) {
    alert("Tagline is required");
    return;
  }

  if (!form.intro.trim()) {
    alert("Introduction is required");
    return;
  }

  if (!form.importance.trim()) {
    alert("Importance is required");
    return;
  }

  if (!form.muhurat.trim()) {
    alert("Muhurat is required");
    return;
  }

  try {
    setLoading(true);

    const formData = new FormData();

Object.keys(form).forEach((key) => {

  if (
    key === "benefits" ||
    key === "procedure_steps" ||
    key === "samagri" ||
    key === "faqs"
  ) {

    formData.append(key, JSON.stringify(form[key]));

  } else if (key === "popular") {

    formData.append("popular", form.popular ? 1 : 0);

  } else {

    formData.append(key, form[key]);

  }

});
if (id) {
  await api.put(`/pujas/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
} else {
  await api.post("/pujas", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

alert(
  id
    ? "Puja Updated Successfully"
    : "Puja Added Successfully"
);

    navigate("/admin/pujas");
  } catch (err) {
    console.error(err);

    alert(
      err.response?.data?.message || "Failed to add puja"
    );
  } finally {
    setLoading(false);
  }
};
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setForm({
    ...form,
    [name]: type === "checkbox" ? checked : value,
  });
};
useEffect(() => {
  if (!id) return;

  const fetchPuja = async () => {
    try {
      const res = await api.get(`/pujas/${id}`);

     setForm({
  ...res.data.data,
  popular:
    res.data.data.popular === 1 ||
    res.data.data.popular === true,
});
    } catch (err) {
      console.error(err);
      alert("Failed to load puja");
    }
  };

  fetchPuja();
}, [id]);

  return (
    <div className="add-puja-page">
      <form
        onSubmit={handleSubmit}
        className="add-puja-form"
      >
        <h1>
  {id ? "Edit Puja" : "Add New Puja"}
</h1>

        <div className="form-group">
          <label>Slug</label>

          <input
            type="text"
            name="slug"
            value={form.slug}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Sanskrit Name</label>

          <input
            type="text"
            name="sanskrit"
            value={form.sanskrit}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>

          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>

          <input
  type="file"
  name="image"
  accept="image/*"
  onChange={(e) =>
    setForm({
      ...form,
      image: e.target.files[0],
    })
  }
/>
        </div>

        <div className="form-group">
          <label>Tagline</label>

          <input
            type="text"
            name="tagline"
            value={form.tagline}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Introduction</label>

          <textarea
            rows="5"
            name="intro"
            value={form.intro}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Importance</label>

          <textarea
            rows="4"
            name="importance"
            value={form.importance}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Muhurat</label>

          <input
            type="text"
            name="muhurat"
            value={form.muhurat}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="popular"
              checked={form.popular}
              onChange={handleChange}
            />

            Popular Puja
          </label>
        </div>

        <hr />

        <h2 className="section-title">
          Benefits
        </h2>

        {form.benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex-row"
          >
            <input
              type="text"
              placeholder={`Benefit ${index + 1}`}
              value={benefit}
              onChange={(e) =>
                updateBenefit(index, e.target.value)
              }
            />

            <button
              type="button"
              className="remove-btn"
              onClick={() => removeBenefit(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          className="add-btn"
          onClick={addBenefit}
        >
          + Add Benefit
        </button>
                <hr />

        <h2 className="section-title">
          Procedure Steps
        </h2>

        {form.procedure_steps.map((step, index) => (
          <div
            key={index}
            className="procedure-card"
          >
            <div className="form-group">
              <label>Step Title</label>

              <input
                type="text"
                placeholder="Step Title"
                value={step.title}
                onChange={(e) =>
                  updateProcedure(
                    index,
                    "title",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label>Step Description</label>

              <textarea
                rows="3"
                placeholder="Step Description"
                value={step.description}
                onChange={(e) =>
                  updateProcedure(
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
            </div>

            <button
              type="button"
              className="remove-btn"
              onClick={() =>
                removeProcedure(index)
              }
            >
              Remove Step
            </button>
          </div>
        ))}

        <button
          type="button"
          className="add-btn"
          onClick={addProcedure}
        >
          + Add Procedure Step
        </button>

        <hr />

        <h2 className="section-title">
          Samagri
        </h2>

        {form.samagri.map((item, index) => (
          <div
            key={index}
            className="flex-row"
          >
            <input
              type="text"
              placeholder={`Samagri ${index + 1}`}
              value={item}
              onChange={(e) =>
                updateSamagri(
                  index,
                  e.target.value
                )
              }
            />

            <button
              type="button"
              className="remove-btn"
              onClick={() =>
                removeSamagri(index)
              }
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          className="add-btn"
          onClick={addSamagri}
        >
          + Add Samagri
        </button>
                <hr />

        <h2 className="section-title">
          FAQs
        </h2>

        {form.faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-card"
          >
            <div className="form-group">
              <label>Question</label>

              <input
                type="text"
                placeholder="Question"
                value={faq.q}
                onChange={(e) =>
                  updateFAQ(
                    index,
                    "q",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="form-group">
              <label>Answer</label>

              <textarea
                rows="3"
                placeholder="Answer"
                value={faq.a}
                onChange={(e) =>
                  updateFAQ(
                    index,
                    "a",
                    e.target.value
                  )
                }
              />
            </div>

            <button
              type="button"
              className="remove-btn"
              onClick={() => removeFAQ(index)}
            >
              Remove FAQ
            </button>
          </div>
        ))}

        <button
          type="button"
          className="add-btn"
          onClick={addFAQ}
        >
          + Add FAQ
        </button>

        <hr />

        <div className="form-actions">
          <button
            type="submit"
            className="save-btn"
            disabled={loading}
          >
            {loading
  ? "Saving..."
  : id
  ? "Update Puja"
  : "Save Puja"}
          </button>
        </div>

      </form>
    </div>
  );
}
