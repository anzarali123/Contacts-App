import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Flex, Text, Textarea, useToast } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

import { Container, ContactFlex, UserIcon } from "./contact.styles";

const Contact = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [otp, setOtp] = useState();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const getContact = async () => {
      try {
        const res = await fetch(`api/contact/get/${params.id}`);
        const data = await res.json();
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getContact();
  }, []);

  useEffect(() => {
    let a = 6;
    let b = Math.random() * 10 ** a;
    setOtp(Math.floor(b));
  }, [isMessageSent]);

  const handleSubmit = () => {
    const userDetails = { details, otp };
    const sendMessage = async () => {
      try {
        const res = await fetch("api/message/", {
          method: "POST",
          body: JSON.stringify(userDetails),
          headers: {
            "Content-Type": "application/json",
          },
        });
        await res.json();
        setIsMessageSent(!isMessageSent);
        toast({
          title: "OTP sent successfully",
          description: "Message sent",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Error sending the message",
          description: `${error.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    sendMessage();
  };

  return (
    <Container>
      <ContactFlex>
        <Flex alignItems="center">
          <UserIcon as={FaUserCircle} boxSize={12} />
          <Text cursor="pointer" fontSize="24px" color="white">
            {`${details.firstName} ${details.lastName}`}
          </Text>
        </Flex>
        <Box>
          <Text color="white" fontSize="30px">
            {details.mobileNumber}
          </Text>
        </Box>
      </ContactFlex>
      <Textarea margin="30px 0" disabled value={`Hi! your otp is ${otp}`} />
      <Button onClick={handleSubmit} width="100%" colorScheme="blue">
        Send
      </Button>
    </Container>
  );
};

export default Contact;
