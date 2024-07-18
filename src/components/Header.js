import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import LOGO from "../assets/img/LOGO.svg";

const fadeOn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  z-index: 1000;
  opacity: 0;
  ${({ shouldFadeOn }) =>
    shouldFadeOn &&
    css`
      animation: ${fadeOn} 1s forwards;
      animation-delay: 3.5s;
    `}
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
  const [shouldFadeOn, setShouldFadeOn] = useState(false);
  const menuList = ["ABOUT", "PROJECT", "CONTACT"];

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setShouldFadeOn(true);
    }, 800);

    return () => {
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <HeaderWrap shouldFadeOn={shouldFadeOn}>
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
