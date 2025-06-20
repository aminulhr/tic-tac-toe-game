import { useState } from "react";

const App = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = checkWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXTurn(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-800 to-gray-900 text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl font-bold mb-6 tracking-wide">Tic Tac Toe</h1>

      <div className="text-lg mb-4">
        {winner ? (
          <span className="text-green-400 font-semibold text-2xl">
            Winner: {winner}
          </span>
        ) : isDraw ? (
          <span className="text-yellow-400 font-semibold text-2xl">
            It's a Draw!
          </span>
        ) : (
          <span className="text-blue-400 text-xl">
            Turn: {isXTurn ? "X" : "O"}
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {board.map((cell, index) => (
          <div
            key={index}
            className="w-24 h-24 bg-white text-black text-4xl font-bold flex items-center justify-center shadow-md rounded-lg cursor-pointer hover:bg-gray-200 transition"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
      >
        Reset Game
      </button>
    </div>
  );
};

export default App;
