import { Snippet, SnippetField, SnippetFormData } from 'shared/snippet';

export type StoreState = {
  snippets: Snippet[];
  isSnippetModalVisible: boolean;
};

export type StoreActions = {
  addSnippet: (s: SnippetFormData) => Promise<void>;
  removeSnippet: (id: string) => Promise<void>;
  updateSnippet: (param: {
    id: string;
    field: SnippetField;
    value: string;
  }) => Promise<void>;
  showSnippetModal: () => Promise<void>;
  hideSnippetModal: () => Promise<void>;
};
