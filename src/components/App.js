import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import game from '../reducers/gameReducer';
import Header from './header';
import GameContainer from './GameContainer';
import ModalContainer from './ModalContainer';

let store = createStore(game);

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <ModalContainer />
        <GameContainer />
      </div>
    </Provider>
  );
}