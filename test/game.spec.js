import {expect} from 'chai';
import deepFreeze from 'deep-freeze';

import game from '../src/reducers';

const initialState = {
  board: null,
  winner: '',
  draw: false,
  running: false,
  turn: 'X'
};

const runningState = {
  board: Array.from({length: 9}, item => ''),
  winner: '',
  draw: false,
  running: true,
  turn: 'X'
};

describe('Test environment', function() {
  it('should run a test', function(done) {
    expect(true).to.equal(true);
    done();
  });
});

describe('Test initial application state', function() {
  it('should generate the correct initial application state when reducer is first called', function(done) {
    expect(game()).to.eql(initialState);
    done();
  });
});

describe('Test initial game board state', function() {
  it('should generate an empty board when the game is started', function(done) {
    const newBoard = Array.from({length: 9}, item => '');
    const action = {
      type: 'START_NEW_GAME',
      board: newBoard,
      running: true
    };

    deepFreeze(action);

    expect(game(initialState, action)).to.eql(runningState);
    done();
  });
});

describe('Test board updating on each turn', function() {
  it('should update the board correctly after a player turn', function(done) {
    const newState = {
      board: ['', '', '', 'X', '', '', '', '', ''],
      winner: '',
      draw: false,
      running: true,
      turn: 'O'
    };
    const action = {
      type: 'TAKE_TURN',
      board: Array.from(newState.board),
      turn: 'O'
    };
    expect(game(runningState, action).board).to.eql(newState.board);
    done();
  });
});