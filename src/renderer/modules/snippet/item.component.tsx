import { Box } from '@chakra-ui/react';
import { FC, useCallback } from 'react';
import { CodeEditorWithLang } from 'renderer/components/code-editor-with-lang.component';
import { TextEditable } from 'renderer/components/text-editable.component';
import { Snippet, SnippetField } from 'shared/snippet';

interface SnippetItemProps extends Snippet {
  onEdit: (param: { id: string; field: SnippetField; value: string }) => void;
}

const SnippetItem: FC<SnippetItemProps> = (props) => {
  const { id, title, description, code, onEdit } = props;

  const makeFieldEditHandler = useCallback(
    (field: SnippetField) => (value: string) => onEdit({ id, field, value }),
    [id, onEdit]
  );

  return (
    <Box>
      <TextEditable
        fontSize="xl"
        defaultValue={title}
        onSubmit={makeFieldEditHandler(SnippetField.Title)}
      />

      <TextEditable
        fontSize="sm"
        defaultValue={description}
        onSubmit={makeFieldEditHandler(SnippetField.Description)}
      />

      <Box mt={2}>
        <CodeEditorWithLang
          placeholder="Your code here ..."
          value={code}
          debounceAmount={200}
          onChange={makeFieldEditHandler(SnippetField.Code)}
        />
      </Box>
    </Box>
  );
};

export default SnippetItem;
