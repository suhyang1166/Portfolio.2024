import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Explain from "./components/Explain";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import loadLottie from "../../assets/json/load.json";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  width: 100vw;
  height: 110vh;
  position: fixed;
  top: -180px;
  padding: 30px;
  overflow: hidden;
`;

const Bg = styled.div`
  width: 100%;
  height: 150vh;
  position: absolute;
  top: -10vh;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 90;
  backdrop-filter: blur(3px);
`;

const Main = styled.div`
  width: 72%;
  height: 720px;
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  overflow-x: hidden;
  z-index: 100;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  border-radius: 30px;
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
`;

const ProjectVideo = styled.video`
  width: 100%;
  height: 680px;
  padding: 10px;
  position: sticky;
  top: 0;
  cursor: pointer;
`;

const TextWrap = styled.div`
  flex: 1;
`;

const Loading = styled.div`
  width: 100%;
  height: 680px;
  padding: 0 20px;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #bbf744;
    text-align: center;
  }
`;

const LottieLoading = styled(Lottie)`
  width: 100%;
  height: 320px;
`;

const Modal = ({ item, setModalOpen, goToSite }) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [isVideoAvailable, setIsVideoAvailable] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const videoPath = await import(`../../assets/video/${item.video}.mp4`);
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

  const projectWrapHeight = () => {
    return item.contents.length >= 6 ? "300%" : "180%";
  };

  const handleBgClick = () => {
    setModalOpen(false);
  };

  const handleMainClick = (e) => {
    e.stopPropagation();
  };

  const handleCanPlay = () => {
    setIsVideoAvailable(true);
    setLoading(false);
  };

  return (
    <Container>
      <Bg onClick={handleBgClick} />
      <Main onClick={handleMainClick}>
        <ProjectWrap height={projectWrapHeight()}>
          <ImgWrap>
            {loading && (
              <Loading>
                <LottieLoading animationData={loadLottie} />
                <p>동영상을 가져오고 있습니다.</p>
              </Loading>
            )}
            {!loading && isVideoAvailable && (
              <ProjectVideo
                key={item?.id}
                muted
                autoPlay
                loop
                onCanPlay={handleCanPlay}
                onClick={goToSite}
              >
                <source src={videoUrl} type="video/mp4" />
              </ProjectVideo>
            )}
            {!loading && !isVideoAvailable && (
              <Loading>
                <p>동영상을 로드할 수 없습니다.</p>
              </Loading>
            )}
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
