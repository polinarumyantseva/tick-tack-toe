import { useState, useEffect } from 'react';
import { Field, Information } from './components';
import { store } from './store/store';
import styles from './app.module.css';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const App = () => {
	const [state, setState] = useState(store.getState());
	const { field, currentPlayer, flags } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	const handleSetCurrentPlayer = (item, index) => {
		if (item === '' && !flags.isGameEnded) {
			const newFields = field.map((el, indx) => (field[index] = index === indx ? currentPlayer : el));
			store.dispatch({ type: 'SET_FIELD', payload: newFields });

			const hasEmptyField = field.some((field) => field === '');
			if (!hasEmptyField) store.dispatch({ type: 'SET_IS_DRAW', payload: true });

			if (isWinner(newFields)) {
				store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			} else {
				const newPlayer = currentPlayer === 'X' ? '0' : 'X';

				store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: newPlayer });
			}
		}
	};

	const isWinner = (newFields) => {
		let isWinner = false;
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [item1, item2, item3] = WIN_PATTERNS[i];

			if (
				newFields[item1] === currentPlayer &&
				newFields[item2] === currentPlayer &&
				newFields[item3] === currentPlayer
			) {
				isWinner = true;
			}
		}

		return isWinner;
	};

	const handleStartAgain = () => {
		store.dispatch({ type: 'RESTART' });
	};

	return <AppLayout handleSetCurrentPlayer={handleSetCurrentPlayer} handleStartAgain={handleStartAgain} />;
};

const AppLayout = ({ handleSetCurrentPlayer, handleStartAgain }) => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Игра «Крестики-Нолики»</h1>
				<div className={styles.wrapper}>
					<Field handleClick={handleSetCurrentPlayer} />
					<Information />
					<button className={styles['button-start-again']} onClick={handleStartAgain}>
						Начать заново
					</button>
				</div>
			</div>
		</div>
	);
};
