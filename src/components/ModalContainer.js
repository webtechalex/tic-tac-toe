import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Modal from './Modal';

import {startNewGame} from '../actions';

const mapStateToProps = state => {
  return {
    running: state.running,
    winner: state.winner,
    draw: state.draw
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    startNewGame
  }, dispatch);
}

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

export default ModalContainer;