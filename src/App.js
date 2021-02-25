import react from 'react';
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Service from './Service'
import Error from './Error'
import Navigation from './Navigation'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />y
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      {/* <Footer/> */}
    </>
  );
}

export default App;
