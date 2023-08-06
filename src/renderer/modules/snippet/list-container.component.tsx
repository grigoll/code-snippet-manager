import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Tooltip } from '@chakra-ui/react';
import { FC } from 'react';
import { useAppStore } from 'renderer/store';
import { actionSelectors, stateSelectors } from 'renderer/store/selectors';
import { SnippetList } from './list.component';

export const SnippetListContainer: FC = () => {
  const snippets = useAppStore(stateSelectors.snippets);
  const showModal = useAppStore(actionSelectors.showSnippetModal);
  const removeSnippet = useAppStore(actionSelectors.removeSnippet);
  const updateSnippet = useAppStore(actionSelectors.updateSnippet);

  return (
    <Box>
      <Flex justifyContent="space-between" mb="4">
        <Heading mb={4}> Code Snippets</Heading>

        <Tooltip label="New snippet">
          <IconButton
            onClick={showModal}
            colorScheme="green"
            aria-label="Add snippet button"
            icon={<AddIcon />}
          />
        </Tooltip>
      </Flex>

      <SnippetList
        snippets={snippets}
        onEditItem={updateSnippet}
        onRemoveItem={removeSnippet}
      />
    </Box>
  );
};
