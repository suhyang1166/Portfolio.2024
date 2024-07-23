import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: -120px;
    padding: 20px;
`;

const Bg = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: -120px;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 90;
    backdrop-filter: blur(3px);
`;

const Main = styled.div`
    width: 70%;
    height: 800px;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    overflow-x: hidden;
    z-index: 100;
    background: rgba(0, 0, 0, 1);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    /* border: 1px solid #f00; */
    &::-webkit-scrollbar {
        width: 41px;
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: #fff;
        background-clip: padding-box;
        border: 20px solid transparent;
    }
    &::-webkit-scrollbar-track {
        display: none;
    }
`;

const ProjectWrap = styled.div`
    width: 100%;
    height: 300%;
    display: flex;
    gap: 30px;
`;

const ImgWrap = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    /* border: 1px solid #f00; */
`;

const ProjectVideo = styled.video`
    width: 100%;
    height: 800px;
    /* border: 1px solid #f00; */
    padding: 50px 0;
    position: sticky;
    top: 0;
`;

const TextWrap = styled.div`
    flex: 1;
    padding: 20px 0;
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
    return (
        <Container>
            <Bg onClick={() => setModalOpen(false)} />
            <Main>
                <ProjectWrap>
                    <ImgWrap>
                        <ImgWrap>
                            {loading ? (
                                <p>Loading...</p>
                            ) : isVideoAvailable ? (
                                <ProjectVideo
                                    key={item?.id}
                                    muted
                                    autoPlay
                                    loop
                                >
                                    <source src={videoUrl} type="video/mp4" />
                                </ProjectVideo>
                            ) : null}
                        </ImgWrap>
                    </ImgWrap>
                    <TextWrap>
                        <h3>{item.projectNM}</h3>
                    </TextWrap>
                </ProjectWrap>
            </Main>
        </Container>
    );
};

export default Modal;
