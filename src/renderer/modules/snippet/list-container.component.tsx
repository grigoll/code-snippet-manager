import { Box, Heading } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { SnippetList } from './list.component';

export const SnippetListContainer: FC = () => {
  const [snippets, setSnippets] = useState([]);

  return (
    <Box>
      <Heading mb={4}> Code Snippets</Heading>

      <SnippetList snippets={[{ id: 1 }, { id: 2 }]} />
    </Box>
  );
};
