import styled, { css } from "styled-components";

const getImageUrl = ({ imageUrl }) => imageUrl;

const imageSize = size => (size === "large" ? largeImage : "");

const largeImage = css`
  height: 380px;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & div:first-child {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & div:nth-child(2) {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  ${imageSize}
`;

export const BackgroundImage = styled.div`
  background-image: url(${getImageUrl});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const Content = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
`;
