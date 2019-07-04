import React, { Component } from 'react'
import './styles.css'
import Header from './components/Header'

const App = () => (
  <div className="App">
    <Header />
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
