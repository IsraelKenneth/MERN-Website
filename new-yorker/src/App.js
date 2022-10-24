import React from "react";
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
    <main>
    <Container>
    <h1 className="py-3">Welcome to New Yorker</h1>
    </Container>
    
    </main>
    <Footer />
      
    </>
  );
}

export default App;
