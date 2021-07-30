import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Navigator from './components/Navigator';
import Home from './components/Home';
import Description from './components/Description';
import Cart from './components/cart/Cart';
import Alert from './components/Alert';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: 'top center',
  timeout: 3000
}

function App() {
  return (
    <div>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Alert />
          <Router>
            <Navigator />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products/:id" component={Description} />
              <Route exact path="/mycart" component={Cart} />
            </Switch>
          </Router>
        </AlertProvider>
      </Provider>
    </div>
  );
}

export default App;
