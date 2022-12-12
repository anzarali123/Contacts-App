import ContactForm from "../contact form/contactForm.component";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const InputModal = ({ isOpen, onClose, saveContactToDatabase }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter details to add contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ContactForm saveContactToDatabase={saveContactToDatabase} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InputModal;
