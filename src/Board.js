import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    
    let initialBoard = []
    for(let i = 0; i < nrows; i++){
      initialBoard.push(Array.from({length: ncols}, (m) => !!chanceLightStartsOn))
    }
    
    // TODO: create array-of-arrays of true/false values
    


    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    const winner = board.forEach(b => {
      b.every(val => val === true)
    })

    return winner
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);
                      // takes a string turns into array with [0-1]
                      // potentially <tr><td/></tr>
      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it


        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
                             //turns boardCopy cell false/unlit
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const copy = [...oldBoard]


      // TODO: in the copy, flip this cell and the cells around it
      
      const flipped = flipCell(copy[y], copy[x], copy)
      /* flipCell(copy[y], copy[x + 1], copy)
      flipCell(copy[y], copy[x - 1], copy)
      flipCell(copy[y - 1], copy[x], copy)
      flipCell(copy[y + 1], copy[x], copy) */
      
    

      // TODO: return the copy

      return flipped
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board 

  // TODO

  return (
    <div>
      <table>
      {board.map(rows => {
        <tr>
          {rows.map(cells =>{
            <Cell c />
          })}
        </tr>
      })}
      </table>

    </div>
  )
}

Board.defaultProps = {
  nrows: 3,
  ncols: 3,
  chanceLightStartsOn: Math.floor(Math.random() * 2)
}

export default Board;