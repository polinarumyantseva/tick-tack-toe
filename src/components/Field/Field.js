import styles from './field.module.css';
import { store } from '../../store/store';
import { checkWinner, hasEmptyField } from '../../utils';
import { useSubscribe } from '../../hooks';

const FieldLayout = () => {
	const { field, currentPlayer, flags } = store.getState();

	useSubscribe();

	const handleSetCurrentPlayer = (item, index) => {
		if (item === '' && !flags.isGameEnded) {
			const newFields = field.map((el, indx) => (field[index] = index === indx ? currentPlayer : el));
			store.dispatch({ type: 'SET_FIELD', payload: newFields });

			if (!hasEmptyField(field)) store.dispatch({ type: 'SET_IS_DRAW', payload: true });

			if (checkWinner(newFields, currentPlayer)) {
				store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			} else {
				const newPlayer = currentPlayer === 'X' ? '0' : 'X';

				store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: newPlayer });
			}
		}
	};

	return (
		<div className={styles['field-list']}>
			{field.map((item, index) => {
				return (
					<button
						key={index}
						onClick={() => handleSetCurrentPlayer(item, index)}
						className={styles['item'] + (item === '0' ? ' ' + styles.red : '')}
						disabled={flags.isGameEnded}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
};

export const Field = () => {
	return <FieldLayout />;
};
