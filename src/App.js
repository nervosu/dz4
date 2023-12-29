import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FormComponent from './components/FormComponent';
import DisplayComponent from './components/DisplayComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormComponent />
        <DisplayComponent />
      </div>
    </Provider>
  );
}

export default App;
