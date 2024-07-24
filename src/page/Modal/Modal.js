import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Explain from "./components/Explain";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: -100px;
  padding: 30px;
`;

const Bg = styled.div`
  width: 100%;
  height: 150vh;
  position: absolute;
  top: -10vh;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 90;
  backdrop-filter: blur(3px);
`;

const Main = styled.div`
  width: 70%;
  height: 720px;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  overflow-x: hidden;
  z-index: 100;
  background: rgba(0, 0, 0, 1);
  /* background: #fff; */
  /* color: #000; */
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  /* border: 1px solid #f00; */
  &::-webkit-scrollbar {
    width: 61px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
    background-clip: padding-box;
    border: 30px solid transparent;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
`;

const ProjectWrap = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  gap: 20px;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  /* border: 1px solid #f00; */
`;

const ProjectVideo = styled.video`
  width: 100%;
  height: 680px;
  /* border: 1px solid #f00; */
  padding: 0 20px;
  position: sticky;
  top: 0;
`;

const TextWrap = styled.div`
  flex: 1;
`;

const Modal = ({ item, setModalOpen }) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [isVideoAvailable, setIsVideoAvailable] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const videoPath = await import(
          "../../assets/video/" + `${item.video}` + ".mp4"
        );
        setVideoUrl(videoPath.default || videoPath);
        setIsVideoAvailable(true);
      } catch (err) {
        setIsVideoAvailable(false);
      } finally {
        setLoading(false);
      }
    };
    loadVideo();

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [item.video]);

  // 높이 계산
  const projectWrapHeight = () => {
    if (item.contents.length >= 6) {
      return "300%";
    } else {
      return "180%";
    }
  };

  const handleBgClick = (e) => {
    setModalOpen(false);
  };

  const handleMainClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Container>
      <Bg onClick={handleBgClick} />
      <Main onClick={handleMainClick}>
        <ProjectWrap height={projectWrapHeight()}>
          <ImgWrap>
            {loading ? (
              <p>Loading...</p>
            ) : isVideoAvailable ? (
              <ProjectVideo key={item?.id} muted autoPlay loop>
                <source src={videoUrl} type="video/mp4" />
              </ProjectVideo>
            ) : null}
          </ImgWrap>
          <TextWrap>
            <Explain item={item} setModalOpen={setModalOpen} />
          </TextWrap>
        </ProjectWrap>
      </Main>
    </Container>
  );
};

export default Modal;
