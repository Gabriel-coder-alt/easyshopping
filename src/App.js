import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Navigator from './components/Navigator';
import Home from './components/Home';
import Description from './components/Description';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navigator />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products/:id" component={Description} />
            <Route exact path="/mycart" component={Cart} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
