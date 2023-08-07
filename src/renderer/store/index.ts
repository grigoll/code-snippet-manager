import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { logger } from 'renderer/libs/logger';
import { Snippet } from 'shared/snippet';
import { storeLoggerMiddleware } from './logger.middleware';
import { StoreActions, StoreState } from './types';

const sendUpdatedSnippetsToStorage = (snippets: Snippet[]) =>
  window.electron.ipcRenderer.sendMessage(
    'ipc-set-store-value',
    'snippets',
    snippets
  );

export interface Store extends StoreState, StoreActions {}

export const useAppStore = create<Store>()(
  storeLoggerMiddleware((set, get) => ({
    loadSnippetsFromStorage: async () => {
      window.electron.ipcRenderer.sendMessage(
        'ipc-get-store-value',
        'snippets'
      );
    },

    snippets: [],
    addSnippet: async (snippetData) => {
      logger.debug('adding snippet', { snippetData });

      const updatedSnippets = [
        // let's add new snippets at the start of list
        { id: uuid(), ...snippetData },
        ...get().snippets,
      ];

      sendUpdatedSnippetsToStorage(updatedSnippets);
    },
    removeSnippet: async (id) => {
      logger.debug('removing snippet', { id });

      const updatedSnippets = get().snippets.filter((snip) => snip.id !== id);

      sendUpdatedSnippetsToStorage(updatedSnippets);
    },
    updateSnippet: async ({ id, field, value }) => {
      logger.debug('updating snippet', { id, field, value });

      const updatedSnippets = get().snippets.map((snip) => {
        if (snip.id !== id) {
          return snip;
        }

        return { ...snip, [field]: value };
      });

      sendUpdatedSnippetsToStorage(updatedSnippets);
    },

    isSnippetModalVisible: false,
    showSnippetModal: async () => set({ isSnippetModalVisible: true }),
    hideSnippetModal: async () => set({ isSnippetModalVisible: false }),
  }))
);

/** NOTE
 * We're sending whole list of snippets back and forth which is fine for this project as it's a test.
 * But for real use-case sending whole data would be inefficient (especially when dealing with huge list of data) and better to send chunks/changes
 * and then merge those changes wherever we have data persistance layer
 */

window.electron.ipcRenderer.on('ipc-get-store-value', (snippets) => {
  logger.debug('loaded existing snippets from storage', { snippets });

  useAppStore.setState({ snippets: <Snippet[]>snippets });
});

window.electron.ipcRenderer.on('ipc-set-store-value', (newSnippets) => {
  logger.debug('snippets were updated in storage', { newSnippets });

  useAppStore.setState({ snippets: <Snippet[]>newSnippets });
});
