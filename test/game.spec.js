import {expect} from 'chai';
import deepFreeze from 'deep-freeze';

import game from '../src/reducers';
import {takeTurn} from '../src/actions';
import detectWin from '../src/helpers';

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

const populatedBoardState = {
  board: ['', '', 'X', 'X', 'O', '', '', 'O', ''],
  winner: '',
  draw: false,
  running: true,
  turn: 'O'
};

const drawnBoardState = {
  board: ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X'],
  winner: '',
  draw: false,
  running: true,
  turn: 'O'
}

const xWonBoardState = {
  board: ['X', 'X', 'O', 'O', 'X', 'O', '', '', 'X'],
  winner: '',
  draw: false,
  running: true,
  turn: 'O'
}

const oWonBoardState = {
  board: ['O', 'O', 'O', '', 'X', 'O', '', '', 'X'],
  winner: '',
  draw: false,
  running: true,
  turn: 'O'
}

const oWonConfirmedState = {
  board: ['O', 'O', 'O', '', 'X', 'O', '', '', 'X'],
  winner: 'O',
  draw: false,
  running: false,
  turn: 'X'
}

const drawConfirmedBoardState = {
  board: ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X'],
  winner: '',
  draw: true,
  running: true,
  turn: 'X'
}

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
      running: true,
      winner: '',
      draw: false
    };

    deepFreeze(action);

    expect(game(initialState, action)).to.eql(runningState);
    done();
  });
  it('should receive initialState so that "winner" and "draw" are reset for a new game', function() {
    const newBoard = Array.from({length: 9}, item => '');
    const action = {
      type: 'START_NEW_GAME',
      board: newBoard,
      running: true,
      winner: '',
      draw: false
    };

    deepFreeze(action);

    expect(game(oWonConfirmedState, action)).to.eql(runningState);
    expect(game(drawConfirmedBoardState, action)).to.eql(runningState);
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

    expect(game(runningState, takeTurn(3, 'X', runningState.board)).board).to.eql(newState.board);
    done();
  });

  // conditional updating is handled in React in this case, not by Redux action creators
  xit('should not update the board if a populated cell is clicked', function(done) {
    expect(game(populatedBoardState, takeTurn(2, 'O', populatedBoardState.board))).to.equal(populatedBoardState);
    done();
  });
});

describe('Test game draw declaration', function() {
  it('returns draw: true and running: false when the board is complete with no winner', function(done) {
    const action = {
      type: 'DECLARE_DRAW',
      draw: true,
      running: false
    };
    const drawDeclaredState = Object.assign({}, drawnBoardState, {draw: true, running: false});
    expect(game(drawnBoardState, action)).to.eql(drawDeclaredState);
    done();
  });
});

describe('Test game win detection', function() {
  it('detects when a game has been won and returns the winning player', function(done) {
    expect(detectWin(xWonBoardState.board)).to.equal('X');
    expect(detectWin(oWonBoardState.board)).to.equal('O');
    done();
  });
  it('returns an empty string if there is no winning player', function(done) {
    expect(detectWin(populatedBoardState.board)).to.equal('');
    expect(detectWin(drawnBoardState.board)).to.equal('');
    done();
  });
});

describe('Test game win declaration', function() {
  it('returns a winner when one is detected', function(done) {
    const action = {
      type: 'DECLARE_WINNER',
      winner: 'X',
      running: false
    }
    const winDeclaredState = Object.assign({}, xWonBoardState, {winner: 'X', running: false})
    expect(game(xWonBoardState, action)).to.eql(winDeclaredState);
    done();
  });
});
