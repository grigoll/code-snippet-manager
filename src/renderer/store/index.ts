import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { logger } from 'renderer/libs/logger';
import { storeLoggerMiddleware } from './logger.middleware';
import { StoreActions, StoreState } from './types';

export interface Store extends StoreState, StoreActions {}

export const useAppStore = create<Store>()(
  storeLoggerMiddleware((set) => ({
    snippets: [],
    addSnippet: async (snippetData) => {
      logger.debug('adding snippet', { snippetData });

      set((prev) => ({
        snippets: prev.snippets.concat({ id: uuid(), ...snippetData }),
      }));

      logger.debug('added snippet');
    },
    removeSnippet: async (id) => {
      logger.debug('removing snippet', { id });

      set((prev) => ({
        snippets: prev.snippets.filter((snip) => snip.id !== id),
      }));

      logger.debug('removed snippet', { id });
    },
    updateSnippet: async ({ id, field, value }) => {
      logger.debug('updating snippet', { id, field, value });

      set((prev) => ({
        snippets: prev.snippets.map((snip) => {
          if (snip.id !== id) {
            return snip;
          }

          return { ...snip, [field]: value };
        }),
      }));

      logger.debug('updated snippet', { id });
    },

    isSnippetModalVisible: false,
    showSnippetModal: async () => set({ isSnippetModalVisible: true }),
    hideSnippetModal: async () => set({ isSnippetModalVisible: false }),
  }))
);
