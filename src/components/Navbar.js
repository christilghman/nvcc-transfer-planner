import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return(
        <nav className = "navbar">
            <h2 className="logo">NOVA Transfer Planner</h2>
            <ul className="nav-links">
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/choose-university">Choose University</Link></li>
                <li><Link to ="/schedule-builder">Schedule Builder</Link></li>
            </ul>
        </nav>
    );

}

export default Navbar;
