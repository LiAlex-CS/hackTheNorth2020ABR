import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { ConfigureStore } from './redux/configureStore';
import Main from './components/MainComponent';

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
     );
  }
}
 
export default App;

