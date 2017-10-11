import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import game from '../reducers/gameReducer';
import Header from './header';

let store = createStore(game);

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
      </div>
    </Provider>
  );
}