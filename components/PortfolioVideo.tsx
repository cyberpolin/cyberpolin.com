import React, { useState } from "react"

const PortfolioVideo = ({ uri, backgroundColor, youtube }) => {
  const videoAry = ["bg-1.mp4", "bg-2.mp4"]
  const randomVideo = videoAry[Math.floor(Math.random() * videoAry.length)]
  const [hover, setHover] = useState(false)

  return (
    <div
      className="relative transition-all duration-500 ease-in-out"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <video className="-z-1" id="background-video" autoPlay loop muted>
        <source src={`bg-videos/${randomVideo}`} type="video/mp4" />
      </video>
      <div
        className="absolute top-0 bg opacity-80  w-full h-full"
        style={{ backgroundColor: backgroundColor }}
      />
      <img className="z-10 absolute top-0" src={uri} alt="Inkind Mobile App" />
      <iframe
        className={` transition-all z-10 absolute bottom-0 right-0 rounded-lg ${
          !hover ? "h-1/3 w-1/3" : "h-full w-full"
        }`}
        src={youtube}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default PortfolioVideo
