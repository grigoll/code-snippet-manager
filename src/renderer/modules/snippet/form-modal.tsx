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
} from '@chakra-ui/react';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { SnippetField, SnippetFormData } from 'shared/snippet';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (snippetData: SnippetFormData) => void;
}

const formInitialState: SnippetFormData = {
  title: '',
  description: '',
  code: '',
};

export const SnippetFormModal: FC<Props> = (props) => {
  const { isOpen, onClose, onConfirm } = props;

  const [fields, setFields] = useState(formInitialState);

  const makeFieldChangeHandler = useCallback(
    (name: `${SnippetField}`) =>
      (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFields((prev) => ({ ...prev, [name]: evt.target.value })),
    []
  );

  const saveSnippet = useCallback(() => {
    onConfirm(fields);
    onClose();
  }, [fields, onClose, onConfirm]);

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
              name={SnippetField.Title}
              value={fields.title}
              onChange={makeFieldChangeHandler('title')}
            />
          </FormControl>

          <FormControl mt={5} isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              name={SnippetField.Description}
              value={fields.description}
              onChange={makeFieldChangeHandler('description')}
            />
          </FormControl>

          <FormControl isRequired mt={5}>
            <FormLabel>Code snippet</FormLabel>
            <Textarea
              name={SnippetField.Code}
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
            isDisabled={!(fields.title && fields.description && fields.code)}
            onClick={saveSnippet}
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
