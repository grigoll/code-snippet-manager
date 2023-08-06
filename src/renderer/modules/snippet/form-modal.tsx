import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

enum FormField {
  Title = 'title',
  Description = 'description',
  Code = 'code',
}

const formInitialState = {
  [FormField.Title]: '',
  [FormField.Description]: '',
  [FormField.Code]: '',
};

export const SnippetFormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [fields, setFields] = useState(formInitialState);

  const makeFieldChangeHandler = useCallback(
    (name: `${FormField}`) =>
      (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFields((prev) => ({ ...prev, [name]: evt.target.value })),
    []
  );

  useEffect(
    function clearFormStateOnClose() {
      if (!isOpen) {
        setFields(formInitialState);
      }
    },
    [isOpen]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>New Snippet</ModalHeader>

        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              name={FormField.Title}
              value={fields.title}
              onChange={makeFieldChangeHandler('title')}
            />
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>Description</FormLabel>
            <Input
              name={FormField.Description}
              value={fields.description}
              onChange={makeFieldChangeHandler('description')}
            />
          </FormControl>

          <FormControl isRequired mt={5}>
            <FormLabel>Code snippet</FormLabel>
            <Textarea
              name={FormField.Code}
              value={fields.code}
              onChange={makeFieldChangeHandler('code')}
              placeholder="Your code snippet here ..."
              resize="vertical"
              minHeight="200"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            colorScheme="blue"
            isDisabled={!fields.title || !fields.code}
          >
            Add
          </Button>

          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
