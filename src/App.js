import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
          <Wrapper>
            <Route exact path="/" component={Index}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;