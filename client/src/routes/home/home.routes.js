import React, { useEffect, useState } from "react";
import { useDisclosure, Icon, useToast } from "@chakra-ui/react";

import { NoContactHeading, AddContactButton } from "./home.styles";

import { AiOutlineUserAdd } from "react-icons/ai";
import ContactCard from "../../components/Contact Card/contactCard.component";
import InputModal from "../../components/input modal/inputModal.component";
import Search from "../../components/Search Contacts/search.component";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [contacts, setContacts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getContacts = async () => {
      try {
        const res = await fetch("api/contact/getAll");
        const data = await res.json();
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const saveContactToDatabase = async (contactDetails) => {
    try {
      const res = await fetch("api/contact/add", {
        method: "POST",
        body: JSON.stringify(contactDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      toast({
        title: "Contact added successfully",
        description: "Contact has been created",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onClose();
      setContacts([...contacts, data]);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error in adding the contact",
        description: `${error.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      onClose();
    }
  };

  const findContactById = (id) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact._id !== id;
    });
    return filteredContacts;
  };

  const deleteContact = async (id) => {
    const filteredContacts = findContactById(id);
    console.log(filteredContacts);
    try {
      const res = await fetch(`api/contact/${id}`, {
        method: "DELETE",
      });
      await res.json();
      toast({
        title: "Contact deleted successfully",
        description: "Contact has been deleted",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setContacts(filteredContacts);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error deleting the contact",
        description: `${error.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const filteredContacts = contacts.filter((contact) => {
    let name = `${contact.firstName}${contact.lastName}`;
    return name.toLowerCase().includes(searchInput);
  });
  return (
    <div style={{ margin: "35px 80px" }}>
      <AddContactButton onClick={onOpen}>
        <Icon as={AiOutlineUserAdd} /> Add Contact
      </AddContactButton>

      <Search setSearchInput={setSearchInput} />

      <InputModal
        isOpen={isOpen}
        onClose={onClose}
        saveContactToDatabase={saveContactToDatabase}
      />
      {!contacts.length ? (
        <NoContactHeading>NO CONTACTS</NoContactHeading>
      ) : (
        filteredContacts.map((contact) => (
          <ContactCard
            key={contact._id}
            details={contact}
            deleteContact={deleteContact}
          />
        ))
      )}
    </div>
  );
};

export default Home;
