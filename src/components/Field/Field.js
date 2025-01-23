import { useSelector, useDispatch } from 'react-redux';
import { selectField, selectCurrentPlayer, selectFlagIsGameEnded } from '../../store/selectors';
import { setField, setIsDraw, setIsGameEnded, setCurrentPlayer } from '../../store/actions';
import { checkWinner, hasEmptyField } from '../../utils';
import styles from './field.module.css';

const FieldLayout = () => {
	const dispatch = useDispatch();

	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectFlagIsGameEnded);

	const handleSetCurrentPlayer = (item, index) => {
		if (item === '' && !isGameEnded) {
			const newFields = field.map((el, indx) => (field[index] = index === indx ? currentPlayer : el));
			dispatch(setField(newFields));

			if (!hasEmptyField(field)) dispatch(setIsDraw(true));

			if (checkWinner(newFields, currentPlayer)) {
				dispatch(setIsGameEnded(true));
			} else {
				const newPlayer = currentPlayer === 'X' ? '0' : 'X';

				dispatch(setCurrentPlayer(newPlayer));
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
						disabled={isGameEnded}
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
