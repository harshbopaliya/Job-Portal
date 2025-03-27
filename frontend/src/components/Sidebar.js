import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <aside className="sidebar">
      <Link to="/">JobPortal</Link>
      <nav className="side-nav">
        <Link to="/" className="item">
          <i className="bx bx-search-alt"></i> Home
        </Link>
        {user && (
          <>
            <Link to="/saved-jobs" className="item">
              <i className="bx bx-bookmark-minus"></i> Saved Jobs
            </Link>
            <Link to="/applications" className="item">
              <i className="bx bx-briefcase"></i> My Applications
            </Link>
          </>
        )}
        <Link to="/settings" className="item">
          <i className="bx bx-cog"></i> Settings
        </Link>
      </nav>

      {user ? (
        <div className="side-profile">
          <img src="/assets/profile-1.png" alt="Profile" />
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ) : (
        <div className="side-auth">
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
