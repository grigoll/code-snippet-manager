import { FC } from 'react';
import { useAppStore } from 'renderer/store';
import { actionSelectors, stateSelectors } from 'renderer/store/selectors';
import { SnippetFormModal } from './form-modal';

export const SnippetFormModalContainer: FC = () => {
  const isSnippetModalVisible = useAppStore(
    stateSelectors.isSnippetModalVisible
  );
  const hideModal = useAppStore(actionSelectors.hideSnippetModal);
  const addSnippet = useAppStore(actionSelectors.addSnippet);

  return (
    <SnippetFormModal
      isOpen={isSnippetModalVisible}
      onClose={hideModal}
      onConfirm={addSnippet}
    />
  );
};
