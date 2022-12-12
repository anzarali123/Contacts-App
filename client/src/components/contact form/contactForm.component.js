import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { Input, Label, Container } from "./contactForm.styles";

const defaultState = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
};

const ContactForm = ({ saveContactToDatabase }) => {
  const [contactDetails, setContactDetails] = useState(defaultState);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { mobileNumber } = contactDetails;
    if (mobileNumber.length !== 10) {
      toast({
        title: "Enter valid mobile number",
        description: "Number needs to be of 10 digits",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    } else {
      const updatedMobileNumber = "+91" + mobileNumber;
      contactDetails.mobileNumber = updatedMobileNumber;
      saveContactToDatabase(contactDetails);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack gap="15px">
          <Label htmlFor="firstname">First Name</Label>
          <Input
            name="firstName"
            value={contactDetails.firstName}
            id="firstname"
            type="text"
            placeholder="Enter your firstname"
            onChange={handleChange}
            required
          />
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            name="lastName"
            value={contactDetails.lastName}
            id="lastname"
            type="text"
            placeholder="Enter your lastname"
            onChange={handleChange}
            required
          />
          <Label htmlFor="mobileNumber">Phone No.</Label>
          <Input
            name="mobileNumber"
            value={contactDetails.mobileNumber}
            id="mobileNumber"
            type="number"
            placeholder="Enter your mobile no."
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            color="white"
            colorScheme="none"
            _hover={{ opacity: "0.8" }}
            background="#211e32"
          >
            ADD USER
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default ContactForm;
