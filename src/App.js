import React, { Component } from 'react';
import Routes from './routes';

import './styles.css';

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />;
    <Routes />;
  </div>
)
/* ESSA SINTAXE É O MESMO QUE:
class App extends Component {
  render() {
    return (
        CONTEUDO     
    );
  }
}
*/

export default App;
