import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import "./Navbar.css";
import { Button } from "@mui/material";
import { AccessAlarm } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul>
          <div className="links">
            <AccessAlarm
              className="icon"
              color={"primary"}
              fontSize={"large"}
            />
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
          <Button
            className="navbar__button"
            variant="contained"
            onClick={() => alert("hellor")}
          >
            Text
          </Button>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
