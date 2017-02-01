import React, { Component } from 'react';
import PasswordInput from './components/PasswordInput';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
        <Container>
          <PasswordInput />
        </Container>
    );
  }
}

export default App;
