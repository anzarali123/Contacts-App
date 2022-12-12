import styled from "@emotion/styled";

import { Card, Icon, Box } from "@chakra-ui/react";

export const MessageCardContainer = styled(Card)({
  margin: "20px",
  overflow: "hidden",
  variant: "outline",
});

export const UserIcon = styled(Icon)({
  fontSize: "100px",
  margin: "10px",
});

export const DateContainer = styled(Box)({
  background: "lightblue",
  padding: "10px",
});
