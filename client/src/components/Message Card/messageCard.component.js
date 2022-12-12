import { CardBody, CardFooter, Stack, Heading, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

import {
  MessageCardContainer,
  UserIcon,
  DateContainer,
} from "./messageCard.styles";

const MessageCard = ({ message }) => {
  return (
    <MessageCardContainer direction={{ base: "column", sm: "row" }}>
      <UserIcon as={FaUserCircle} />

      <Stack>
        <CardBody>
          <Heading size="md">{message.name}</Heading>
          <Text
            fontWeight="bold"
            py="2"
          >{`Mobile Number - ${message.mobileNumber}`}</Text>
          <Text fontWeight="bold" py="1">{`OTP - ${message.OTP}`}</Text>
        </CardBody>

        <CardFooter>
          <DateContainer>{message.createdAt}</DateContainer>
        </CardFooter>
      </Stack>
    </MessageCardContainer>
  );
};

export default MessageCard;
