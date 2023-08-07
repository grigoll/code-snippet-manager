import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';
import { useAppStore } from 'renderer/store';
import { actionSelectors, stateSelectors } from 'renderer/store/selectors';
import { SnippetList } from './list.component';

export const SnippetListContainer: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const snippets = useAppStore(stateSelectors.snippets);
  const showModal = useAppStore(actionSelectors.showSnippetModal);
  const removeSnippet = useAppStore(actionSelectors.removeSnippet);
  const updateSnippet = useAppStore(actionSelectors.updateSnippet);

  const handleSearch = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => setSearchTerm(evt.target.value),
    []
  );

  const filteredSnippets = useMemo(
    () =>
      searchTerm
        ? snippets.filter((snip) =>
            [snip.title.toLowerCase(), snip.description.toLowerCase()].some(
              (str) => str.includes(searchTerm.trim().toLowerCase())
            )
          )
        : snippets,
    [searchTerm, snippets]
  );

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

      <Input
        onChange={handleSearch}
        type="search"
        placeholder="Search by title or description"
        mb="5"
      />

      {filteredSnippets.length > 0 ? (
        <SnippetList
          snippets={filteredSnippets}
          onEditItem={updateSnippet}
          onRemoveItem={removeSnippet}
        />
      ) : (
        <Text align="center" fontSize="xl">
          No match 😟
          <br />
          Try adjusting your search
        </Text>
      )}
    </Box>
  );
};
