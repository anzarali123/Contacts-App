import styled from "@emotion/styled";

import { Box, Flex, Icon } from "@chakra-ui/react";

export const Container = styled(Box)({
  margin: "25px 0",
  width: "500px",
  position: "absolute",
  left: "200px",
  top: "300px",
});

export const ContactFlex = styled(Flex)({
  background: "#211e32",
  padding: "35px",
  borderRadius: "8px",
  justifyContent: "space-between",
});

export const UserIcon = styled(Icon)({
  cursor: "pointer",
  color: "white",
  marginRight: "15px",
});
