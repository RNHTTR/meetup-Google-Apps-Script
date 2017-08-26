import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

export function NavBar(props) {
  // render() {
    return (
      <div className='nav-bar'>
        {/* <div className="header">Hi!</div> */}
        {/* <button onClick={() => console.log('hi!')}>Say hi!</button> */}
        <div className='test'>Learn Apps Scripts</div>
        <div className='test'>Numba 2</div>
        <div className='test-right'>Numba 3</div>
      </div>
    )
  // }
}

// class Board extends React.Component {
//
//   constructor() {
//     super();
//     this.state = {
//     };
//   }
//
//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext
//     });
//   }
//
//   renderSquare(i) {
//
//     return (
//        <Square value={this.state.squares[i]}
//                onClick={() => this.handleClick(i)}
//       />
//      );
//
//   }
//
//   render() {
//
//     const winner = calculateWinner(this.state.squares);
//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }
//
//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//         </div>
//       </div>
//     );
//   }
// }


// ========================================

// ReactDOM.render(
//   <Header />,
//   document.getElementById('root')
// );
