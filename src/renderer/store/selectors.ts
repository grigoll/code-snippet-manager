import { StoreActions, StoreState } from './types';

/**
 * State selectors
 */
const snippets = (s: StoreState) => s.snippets;
const isSnippetModalVisible = (s: StoreState) => s.isSnippetModalVisible;

export const stateSelectors = {
  snippets,
  isSnippetModalVisible,
};

/**
 * Action selectors
 */
const loadSnippetsFromStorage = (s: StoreActions) => s.loadSnippetsFromStorage;
const addSnippet = (s: StoreActions) => s.addSnippet;
const removeSnippet = (s: StoreActions) => s.removeSnippet;
const updateSnippet = (s: StoreActions) => s.updateSnippet;
const showSnippetModal = (s: StoreActions) => s.showSnippetModal;
const hideSnippetModal = (s: StoreActions) => s.hideSnippetModal;

export const actionSelectors = {
  addSnippet,
  removeSnippet,
  updateSnippet,
  showSnippetModal,
  hideSnippetModal,
  loadSnippetsFromStorage,
};
