import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Board from '../View/board/Board';

import {takeTurn, declareWinner, declareDraw} from '../../actions/index';

const mapStateToProps = state => {
  return {
    board: state.board,
    turn: state.turn
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