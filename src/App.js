import React from 'react';
import './App.scss';
import FormTravel from './components/form/form.travel';
import Menu from './components/menu/menu';
import { Provider } from 'react-redux';
import store from './redux/store';
import ListMenu from './components/menu/listMenu';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ListMenu/>
        <Menu/>
        <FormTravel/>
      </div>
    </Provider>
  );
}

export default App;
