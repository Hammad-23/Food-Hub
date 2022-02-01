import logo from './logo.svg';
import './App.css';
import Reactrouter from "./config/router";
import {store} from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Reactrouter/>
    </div>
    </Provider>
  );
}

export default App;
