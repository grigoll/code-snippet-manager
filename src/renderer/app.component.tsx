import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/layout.component';
import { SnippetFormModalContainer } from './modules/snippet/form-modal.container';
import { SnippetListContainer } from './modules/snippet/list-container.component';

function App() {
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
