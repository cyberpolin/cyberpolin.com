const PortfolioImg = ({ uri, backgroundColor }) => {
  const videoAry = ["bg-1.mp4", "bg-2.mp4"]
  const randomVideo = videoAry[Math.floor(Math.random() * videoAry.length)]
  return (
    <div className="relative ">
      <video className="-z-1" id="background-video" autoPlay loop muted>
        <source src={`bg-videos/${randomVideo}`} type="video/mp4" />
      </video>
      <div
        className="absolute top-0 bg opacity-80  w-full h-full"
        style={{ backgroundColor: backgroundColor }}
      />
      <img className="z-10 absolute top-0" src={uri} alt="Inkind Mobile App" />
    </div>
  )
}

export default PortfolioImg
