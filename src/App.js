import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
	return (
		<div className="App">
			<div className="test-desc">
				<h1>Tic-Tac-Toe</h1>
				<p>
					Your task is to implement a simple Tic-Tac-Toe game using REACT. Goal of the game is to connect 3 Xs or Os in any direction on the board.
					First one to play is the X, after which players take turn until one of them wins. You should clearly display which player has the turn,
					and clearly display who won, or that game is a tie.

					You should also keep and display a current score - you can use a simple variable to store it, no need for persistent storage. <br/>Good luck! :)
				</p>
			</div>

			<Game />
		</div>
	);
}

export default App;
