import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Layout } from './components/layout.component';
import { SnippetFormModalContainer } from './modules/snippet/form-modal.container';
import { SnippetListContainer } from './modules/snippet/list-container.component';
import { useAppStore } from './store';

// Declaring in the same file for simplicity's sake
const usePrepareAppStore = () => {
  const loadSnippetsFromStorage = useAppStore((s) => s.loadSnippetsFromStorage);

  useEffect(() => {
    loadSnippetsFromStorage();
  }, [loadSnippetsFromStorage]);
};

function App() {
  usePrepareAppStore();

  return (
    <ChakraProvider>
      <Layout>
        <SnippetFormModalContainer />
        <SnippetListContainer />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
