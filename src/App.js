import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Header from "components/Header";
import Footer from "components/Footer";
// Pages
import Home from "pages/Home";
import Product from "pages/Product";
import Brand from "pages/Brand";
import Login from "pages/Login";
import Member from "pages/Member";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/chanel" component={Brand} />
        <Route path="/login" component={Login} />
        <Route path="/member" component={Member} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
