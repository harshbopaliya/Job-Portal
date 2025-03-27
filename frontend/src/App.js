import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Filters from "./components/Filters";
import "./styles.css";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<ProtectedRoute><JobList /></ProtectedRoute>} />
            <Route path="/job/:id" element={<ProtectedRoute><JobDetail /></ProtectedRoute>} />
          </Routes>
          <Filters />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
