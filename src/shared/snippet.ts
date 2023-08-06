export enum SnippetField {
  Title = 'title',
  Description = 'description',
  Code = 'code',
}

export interface SnippetFormData {
  [SnippetField.Title]: string;
  [SnippetField.Description]: string;
  [SnippetField.Code]: string;
}

export interface Snippet extends SnippetFormData {
  id: string;
}
