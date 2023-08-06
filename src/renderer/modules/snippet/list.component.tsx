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
import { Snippet } from '../../../shared/snippet';
import SnippetItem from './item.component';

interface SnippetListProps {
  snippets: Snippet[];
}

export const SnippetList: React.FC<SnippetListProps> = ({ snippets }) => {
  return (
    <VStack spacing="5" divider={<StackDivider borderColor="gray.200" />}>
      {snippets.map(({ id }) => (
        <Box key={id} width="100%">
          <SnippetItem key={id} />

          <Flex justifyContent="center" mt="5">
            <Tooltip label="Remove snippet">
              <IconButton
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
