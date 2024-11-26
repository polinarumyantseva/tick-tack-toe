import { useState } from 'react';
import { Field, Information } from './components';
import styles from './app.module.css';

const FIELD = ['', '', '', '', '', '', '', '', ''];
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
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(FIELD);

	const handleSetCurrentPlayer = (item, index) => {
		if (item === '' && !isGameEnded) {
			const newFields = field.map((el, indx) => (field[index] = index === indx ? currentPlayer : el));
			setField(newFields);

			const hasEmptyField = field.some((field) => field === '');
			if (!hasEmptyField) setIsDraw(true);

			if (isWinner(newFields)) {
				setIsGameEnded(true);
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
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
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(FIELD);
	};

	return (
		<AppLayout
			field={field}
			handleSetCurrentPlayer={handleSetCurrentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			handleStartAgain={handleStartAgain}
		/>
	);
};

const AppLayout = ({ field, handleSetCurrentPlayer, isDraw, isGameEnded, currentPlayer, handleStartAgain }) => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Игра «Крестики-Нолики»</h1>
				<div className={styles.wrapper}>
					<Field field={field} handleClick={handleSetCurrentPlayer} isGameEnded={isGameEnded} />
					<Information isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer} />
					<button className={styles['button-start-again']} onClick={handleStartAgain}>
						Начать заново
					</button>
				</div>
			</div>
		</div>
	);
};
