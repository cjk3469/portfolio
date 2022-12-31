import './App.css';
import Header from './components/Header';
import CardList from './components/Card'
import Bg from './components/Bg'

import {Container, Nav, Navbar, Button, Row, Col } from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <br></br>
      <Bg></Bg>
      <br></br>
      <Container>
        <Row>
          <CardList></CardList>
          <CardList></CardList>
          <CardList></CardList>
        </Row>
      </Container>
    </div>
  );
}

export default App;
