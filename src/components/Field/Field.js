import PropTypes from 'prop-types';
import styles from './field.module.css';
import { store } from '../../store/store';

const FieldLayout = ({ onClick }) => {
	const { field, flags } = store.getState();

	return (
		<div className={styles['field-list']}>
			{field.map((item, index) => {
				return (
					<button
						key={index}
						onClick={() => onClick(item, index)}
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

export const Field = ({ handleClick }) => {
	return <FieldLayout onClick={handleClick} />;
};

Field.propTypes = {
	handleClick: PropTypes.func,
};

FieldLayout.propTypes = {
	onClick: PropTypes.func,
};
