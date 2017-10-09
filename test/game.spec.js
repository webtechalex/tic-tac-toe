import {expect} from 'chai';
import {deepFreeze} from 'deep-freeze'
import game from '../src/reducers'

const initialState = {
  board: null,
  winner: '',
  draw: false,
  running: false,
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
    expect(game()).to.deep.equal(initialState);
    done();
  });
});