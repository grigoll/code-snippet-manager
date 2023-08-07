import { Box, Select } from '@chakra-ui/react';
import CodeEditor, {
  TextareaCodeEditorProps,
} from '@uiw/react-textarea-code-editor';
import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';
import { CodeLanguage, CodeLanguages } from 'shared/code-language';

const LangSelectorSize = 40;

interface Props extends Omit<TextareaCodeEditorProps, 'onChange'> {
  onChange: (value: string) => void;
}

export const CodeEditorWithLang: FC<Props> = ({
  padding = 20,
  onChange,
  ...props
}) => {
  const [codeLang, setLang] = useState<CodeLanguage>('tsx');

  const changeLang = useCallback(
    (evt: ChangeEvent<HTMLSelectElement>) =>
      setLang(evt.target.value as CodeLanguage),
    []
  );

  const handleChange = useCallback(
    (evt: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(evt.target.value);
    },
    [onChange]
  );

  const editorStyle = useMemo(
    () => ({
      fontSize: 14,
      borderRadius: 6,
      fontFamily:
        // just some basic nice fonts
        'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
    }),
    []
  );

  return (
    <Box position="relative">
      <CodeEditor
        {...props}
        language={codeLang}
        minHeight={padding + LangSelectorSize + padding}
        padding={padding}
        onChange={handleChange}
        style={editorStyle}
      />

      <Box
        position="absolute"
        right={`${padding}px`}
        top={`${padding}px`}
        zIndex="10"
      >
        <Select
          variant="filled"
          height={`${LangSelectorSize}px`}
          defaultValue={codeLang}
          onChange={changeLang}
        >
          {CodeLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </Select>
      </Box>
    </Box>
  );
};
