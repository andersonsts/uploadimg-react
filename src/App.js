import React from 'react';

import Upload from './components/Upload';

import GlobalStyles from './styles/global';
import { Container, Content } from './styles';

function App() {
  return (
      <Container>
        <Content>
          <Upload />
        </Content>
        <GlobalStyles />
      </Container>
  );
}

export default App;
