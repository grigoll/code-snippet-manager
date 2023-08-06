import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  StackDivider,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Snippet, SnippetField } from '../../../shared/snippet';
import SnippetItem from './item.component';

interface SnippetListProps {
  snippets: Snippet[];
  onRemoveItem: (id: string) => void;
  onEditItem: (param: {
    id: string;
    field: SnippetField;
    value: string;
  }) => void;
}

export const SnippetList: React.FC<SnippetListProps> = ({
  snippets,
  onRemoveItem,
  onEditItem,
}) => {
  return (
    <VStack spacing="5" divider={<StackDivider borderColor="gray.200" />}>
      {snippets.map((snippet) => (
        <Box key={snippet.id} width="100%">
          <SnippetItem {...snippet} onEdit={onEditItem} />

          <Flex justifyContent="center" mt="5">
            <Tooltip label="Remove snippet">
              <IconButton
                onClick={() => onRemoveItem(snippet.id)}
                aria-label="Delete"
                colorScheme="red"
                icon={<DeleteIcon />}
              />
            </Tooltip>
          </Flex>
        </Box>
      ))}
    </VStack>
  );
};
