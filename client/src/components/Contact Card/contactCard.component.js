import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaUserCircle, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactCard = ({ details, deleteContact }) => {
  const { firstName, lastName, mobileNumber, _id } = details;

  const handleDelete = () => {
    deleteContact(_id);
  };
  return (
    <Box margin="25px 0">
      <Flex
        background="#211e32"
        padding="35px"
        borderRadius="8px"
        justifyContent="space-between"
      >
        <Link to={`/${_id}`}>
          <Flex alignItems="center">
            <Icon
              cursor="pointer"
              color="white"
              as={FaUserCircle}
              boxSize={12}
              marginRight="3"
            />
            <Text cursor="pointer" fontSize="24px" color="white">
              {`${firstName} ${lastName}`}
            </Text>
          </Flex>
        </Link>

        <Flex>
          <Icon
            cursor="pointer"
            color="white"
            as={FaTrash}
            boxSize={8}
            _hover={{ color: "red" }}
            onClick={handleDelete}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactCard;
