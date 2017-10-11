import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Board from './Board';

import {takeTurn, declareWinner, declareDraw} from '../actions';

const mapStateToProps = state => {
  return {
    board: state.board
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    takeTurn,
    declareWinner,
    declareDraw
  }, dispatch);
};

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default GameContainer;