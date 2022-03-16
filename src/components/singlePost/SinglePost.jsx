import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6499011/pexels-photo-6499011.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Discover digital world
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Rakesh
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        A virtual reality game or VR game is a video game played on virtual reality (VR) hardware. Most VR games are based on player immersion, typically through head-mounted display unit or headset and one or more controllers. The headset typically provides two stereoscopic displays in front of the user's eyes to simulate a 3D space.
          <br />
          <br />
          The video game industry made early attempts at VR in the 1980s, most notably with Mattel's Power Glove and Nintendo's Virtual Boy. With the introduction of the first consumer-ready VR product, the Oculus Rift, in 2013, VR games soon followed, including existing games adapted for the VR hardware, and new games designed directly for VR. While VR hardware and games grew modestly for the remainder of the 2010s, Half-Life: Alyx, a full VR game developed by Valve, was considered the killer application for VR games.
          <br />
          <br />
          Research into virtual reality (VR) hardware and software started as early as 1968 by Ivan Sutherland and his student Bob Sproull , but most equipment was too expensive for consumer use, and its use for games was limited. The first VR head mounted display that was connected to a computer. In the late 1980s, Jaron Lanier and Thomas G. Zimmerman, former programmers for Atari, Inc., began developing hardware under the name VPL Research, with Lanier coining the term "virtual reality" for their products.[1] One of VPL's products was the VPL DataGlove, a glove that sensed the user's finger movement and translated it into computer input. The idea inspired engineers at Abrams/Gentile Entertainment (AGE) to work with Mattel and Nintendo to build a low-cost version of the DataGlove to work with the Nintendo Entertainment System (NES), omitting much of the technical sophistication and movement sensitivity of the DataGlove as to achieve a reasonable consumer cost.[2] The Power Glove was released in 1989.[3] The games Super Glove Ball and Bad Street Brawler were specifically designed to use the Power Glove, while other NES games could be played using the Power Glove by mapping its output to various controls. About one million Power Glove units were sold before Mattel discontinued it in 1990. Its low cost compared to the DataGlove and other similar gloves led academics to buy the unit for their own research.
        </p>
      </div>
    </div>
  );
}