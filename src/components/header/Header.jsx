import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Thinking</span>
        <span className="headerTitleLg">differently</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
    </div>
  );
}