import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/7887258/pexels-photo-7887258.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/7360387/pexels-photo-7360387.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/6499175/pexels-photo-6499175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://images.pexels.com/photos/6498965/pexels-photo-6498965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
  );
}