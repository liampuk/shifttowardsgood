import styled from "styled-components"
import { Anchor } from "../commonStyles"
import Hls from "hls.js"
import { useEffect, useRef, useState } from "react"

export const WhoWeAre = () => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const source = "/video/video.m3u8"
    if (video) {
      if (Hls.isSupported()) {
        const hls = new Hls()
        hls.loadSource(source)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () =>
          handleVideoLoaded({ success: true })
        )
        hls.on(Hls.Events.ERROR, () => handleVideoLoaded({ success: false }))
      } else {
        handleVideoLoaded({ success: false })
      }
    }
  }, [videoRef])

  const handlePlay = () => {
    if (playing) {
      setPlaying(false)

      if (videoRef.current) {
        videoRef.current.pause()
      }
    } else {
      setPlaying(true)

      if (videoRef.current) {
        videoRef.current
          .play()
          .catch((err) => console.error("Autoplay failed:", err))
      }
    }
  }

  const handleVideoLoaded = (e: any) => {
    console.log("video loaded", e)
  }

  return (
    <Container>
      <Anchor id="WhoWeAre" />
      <div>
        <Heading>Who We Are</Heading>
        <SectionText>
          Shift towards Good is a movement raising money for Medical Aid for
          Palestinians. If you can, take on an extra shift and donate what you
          earn. Each donation will be matched, up to a total of £5000.
        </SectionText>
        <SectionText>
          We stand in solidarity with our colleagues in Gaza and believe that
          each shift can make a huge difference.
        </SectionText>
        <MapSection>
          <MapLogo src="maplogo.webp" />
          <MapButton
            onClick={() => (window.location.href = "https://www.map.org.uk/")}
          >
            Click here to read more
            <br /> about the work MAP does
          </MapButton>
        </MapSection>
      </div>
      <VideoContainer>
        <MainVideo
          onClick={handlePlay}
          poster="video/thumbnail.jpg"
          playsInline
          preload="auto"
          ref={videoRef}
        ></MainVideo>
        {!playing && (
          <PauseButton
            width="150"
            height="150"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 25C35 23.3431 36.3431 22 38 22L75 48C76.6569 49.1046 76.6569 51.8954 75 53L38 79C36.3431 80 35 78.6569 35 77V25Z"
              fill="white"
            />
          </PauseButton>
        )}
      </VideoContainer>
      <MapSectionMobile>
        <MapLogo src="maplogo.webp" />
        <MapButton
          onClick={() => (window.location.href = "https://www.map.org.uk/")}
        >
          Click here to read more
          <br /> about the work MAP does
        </MapButton>
      </MapSectionMobile>
    </Container>
  )
}

const MapButton = styled.button`
  background-color: #e62a2a;
  border: none;
  padding: 16px;
  font-size: 24px;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #d32626;
  }
`

const MapSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;

  @media (orientation: portrait) {
    display: none;
  }
`

const MapSectionMobile = styled(MapSection)`
  flex-direction: column;
  gap: 32px;
  margin-top: 64px;
  display: none;

  @media (orientation: portrait) {
    display: flex;
  }
`

const MapLogo = styled.img`
  height: 120px;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
`

const PauseButton = styled.svg`
  top: 0;
  position: absolute;
  margin-top: 33%;
  pointer-events: none;
  z-index: 1;

  @media (orientation: portrait) {
    margin-top: 65%;
  }
`

const VideoContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
  position: relative;
`

const MainVideo = styled.video`
  width: auto;
  border-radius: 8px;
  cursor: pointer;

  @media (orientation: portrait) {
    height: auto;
    margin-top: 32px;
  }
`

const Container = styled.div`
  background-color: #222;
  color: white;
  width: 100vw;
  padding: 64px;
  position: relative;
  display: flex;

  @media (orientation: portrait) {
    flex-direction: column;
    padding: 32px;
  }
`

const Heading = styled.div`
  font-size: 60px;
  margin-top: 32px;
  font-weight: 600;
  margin-bottom: 32px;
`

const SectionText = styled.div`
  font-size: 24px;
  width: 55vw;
  margin-bottom: 32px;
  text-align: justify;

  @media (orientation: portrait) {
    width: 100%;
    text-align: left;
  }
`
