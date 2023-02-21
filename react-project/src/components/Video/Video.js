// import sunstickVideo from "./sunstickVideo.mp4";
import './Video.css'

const Video = () => {
    return (
    <>
      <video controls width="100%" autoplay="autoplay" loop="loop" height="auto">
        <source src={sunstickVideo} type="video/mp4" className="sunstick"/>
        Sorry, your browser doesn't support videos.
      </video>
    </>
    );
  };
  export default Video;