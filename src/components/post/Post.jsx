import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postVRs">
          <span className="postVR">
            <Link className="link" to="/posts?VR=Business">
              Business
            </Link>
          </span>
          <span className="postVR">
            <Link className="link" to="/posts?VR=Startups">
              Startups
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Discover digital world
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        World's leading independent news publication dedicated to the consumer VR industry. Explores the bleeding edge of virtual reality, augmented reality, and human-computer interaction.
      </p>
    </div>
  );
}