import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { SnippetListContainer } from './modules/snippet/list-container.component';
import { Layout } from './components/layout.component';
import { SnippetFormModal } from './modules/snippet/form-modal';

function App() {
  return (
    <Layout>
      <SnippetListContainer />
      <SnippetFormModal />
    </Layout>
  );
}

export default function Shell() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}
