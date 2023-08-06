import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  EditableProps,
  Flex,
  IconButton,
  Input,
  Tooltip,
  useEditableControls,
} from '@chakra-ui/react';
import { FC } from 'react';

const EditableControls: FC = () => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <Tooltip label="Confirm">
        <IconButton
          colorScheme="blue"
          variant="ghost"
          aria-label="Confirm button"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
      </Tooltip>
      <Tooltip label="Cancel">
        <IconButton
          colorScheme="red"
          variant="ghost"
          aria-label="Cancel button"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </Tooltip>
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <Tooltip label="Edit">
        <IconButton
          colorScheme="cyan"
          variant="ghost"
          aria-label="Edit button"
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Tooltip>
    </Flex>
  );
};

export const TextEditable: FC<EditableProps> = (props) => {
  return (
    <Editable
      {...props}
      display="flex"
      flexDirection="row"
      minHeight="40px"
      alignItems="center"
      justifyContent="space-between"
      isPreviewFocusable={false}
      submitOnBlur={false}
    >
      <EditablePreview />
      <Input as={EditableInput} mr={2} />
      <EditableControls />
    </Editable>
  );
};
