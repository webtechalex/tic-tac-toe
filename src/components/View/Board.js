import React from 'react';

import detectWin from '../../helpers/index';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleCellClick = this.handleCellClick.bind(this);
  }

  componentWillUpdate(nextProps) {
    let checkWinner;
    if (nextProps.board) {
      checkWinner = detectWin(nextProps.board);
      if (checkWinner) {
        nextProps.declareWinner(checkWinner);
      }
      if (!checkWinner && nextProps.board.every(cell => cell)) {
        nextProps.declareDraw();
      }
    }
  }

  handleCellClick(i) {
    if (!this.props.board[i]) {
      this.props.takeTurn(i, this.props.turn, this.props.board);
    }
  }

  render() {
    return (
      <div>
        {this.props.board &&
          <div>
            <div className="status"><p>current player: {this.props.turn}</p></div>
            <div className="board">
              {this.props.board.map((cell, i) => (
                <div className="cell" key={i} onClick={(e) => this.handleCellClick(i)}>
                  {cell}
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    );
  }
};

export default Board;