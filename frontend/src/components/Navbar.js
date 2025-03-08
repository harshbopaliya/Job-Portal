import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">Job Connect</Link>
        <div>
          <Link to="/login" className="btn btn-outline-light mx-2">Login</Link>
          <Link to="/register" className="btn btn-light">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
