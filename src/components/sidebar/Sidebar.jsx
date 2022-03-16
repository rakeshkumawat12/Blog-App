import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p>
          World's leading independent news publication dedicated to the consumer VR industry. Explores the bleeding edge of virtual reality, augmented reality, and human-computer interaction.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?VR=Business">
              Business
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?VR=Startup">
              Startup
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?VR=Design">
              Design
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?VR=Creative">
              Creative
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?VR=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?VR=Visual">
              Visual
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}