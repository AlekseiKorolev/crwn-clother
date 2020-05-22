import React from "react";
import { withRouter } from "react-router-dom";

import {
  Content,
  Title,
  Subtitle,
  BackgroundImage,
  MenuItemContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage imageUrl={imageUrl} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
