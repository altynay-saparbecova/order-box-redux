import "./App.css";
import { OrderBasket } from "./components/OrdersBasket";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Nav />
        </Route>
        <Route path="/orderBox">
          <OrderBasket />
        </Route>
      </div>
    </Router>
  );
}

export default App;
