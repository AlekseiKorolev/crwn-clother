import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

const bgImageUrl = ({ imageUrl }) => imageUrl;

export const CollectionItemContainer = styled.div`
  width: 21vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    div:first-child {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CustomButtonWithStyles = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-image: url(${bgImageUrl});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;