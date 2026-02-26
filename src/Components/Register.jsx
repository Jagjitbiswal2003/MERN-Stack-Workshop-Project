import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/users/register", formData);

      alert("User Registered Successfully");

      setFormData({
        name: "",
        email: "",
        age: "",
        gender: "",
        address: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />


      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />

      <button type="submit">Register User</button>
    </form>
  );
}

export default Register;
