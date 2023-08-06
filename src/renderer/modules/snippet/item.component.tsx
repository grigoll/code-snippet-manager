import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { CodeEditorWithLang } from 'renderer/components/code-editor-with-lang.component';
import { TextEditable } from 'renderer/components/text-editable.component';

const SnippetItem: FC = () => {
  // TODO delete functionality

  return (
    <Box>
      <TextEditable
        defaultValue="Snippet title"
        onChange={(value) => console.log(value)}
      />

      <TextEditable
        fontSize="sm"
        defaultValue="Snippet Description"
        onChange={(value) => console.log(value)}
      >
        Snippet Description
      </TextEditable>

      <Box mt={2}>
        <CodeEditorWithLang
          placeholder="Your code here ..."
          value={`function add(a, b) {\n  return a + b;\n}`}
        />
      </Box>
    </Box>
  );
};

export default SnippetItem;
