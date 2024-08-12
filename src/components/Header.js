import React, { useRef } from "react";
import styled from "styled-components";
import LOGO from "../assets/img/LOGO.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  z-index: 1000;
  opacity: 0;
  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  width: 60px;
  cursor: pointer;
`;

const IndexWrap = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 100px;
`;

const Index = styled.li`
  font-size: 16px;
  color: #fff;
  position: relative;
  text-transform: uppercase;
  &:hover {
    color: #bbf744;
    cursor: pointer;
  }
  &::before {
    content: "";
    width: 100%;
    height: 1.5px;
    background: #bbf744;
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.5s ease;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;

const Header = ({ handleMenuClick }) => {
  const headerRef = useRef(null);

  const menuList = ["ABOUT", "PROJECT", "CONTACT"];

  useGSAP(() => {
    const header = headerRef.current;

    gsap.fromTo(
      header,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 3.2,
      }
    );
  });

  return (
    <HeaderWrap ref={headerRef}>
      <Logo src={LOGO} onClick={() => handleMenuClick("MAIN")} />
      <IndexWrap>
        {menuList.map((menu, idx) => (
          <Index key={idx} onClick={() => handleMenuClick(menu)}>
            {menu}
          </Index>
        ))}
      </IndexWrap>
    </HeaderWrap>
  );
};

export default Header;
