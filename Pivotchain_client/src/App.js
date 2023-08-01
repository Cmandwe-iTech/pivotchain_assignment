import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import List from "./components/List";
import Create from "./components/Create";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="header">
          <Navbar bg="dark" variant="dark">
            <Container className="mt-3">
              <LinkContainer to="/">
                <Navbar.Brand>Employees List</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/create" className="nav-link">
                  Add New Employee
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
// import React from 'react';
// import AnimatedBackground from './components/Animated';
// import ContentWithTransparency from './components/transperancy';


// const App = () => {
//   return (
//     <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
//       <AnimatedBackground/>
//       <ContentWithTransparency/>
//     </div>
//   );
// };

// export default App;
