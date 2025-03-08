import React, { useState, useContext } from "react";
import { loginUser } from "../api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      login(formData.username, response.data.access);
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5">
    <h2 className="text-center">Login</h2>
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>
  </div>
  );
};

export default Login;
