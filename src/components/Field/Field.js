import PropTypes from 'prop-types';
import styles from './field.module.css';

const FieldLayout = ({ field, onClick, isGameEnded }) => {
	return (
		<div className={styles['field-list']}>
			{field.map((item, index) => {
				return (
					<button
						key={index}
						onClick={() => onClick(item, index)}
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

export const Field = ({ field, handleClick, isGameEnded }) => {
	return <FieldLayout field={field} onClick={handleClick} isGameEnded={isGameEnded} />;
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	handleClick: PropTypes.func,
	isGameEnded: PropTypes.bool,
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	onClick: PropTypes.func,
	isGameEnded: PropTypes.bool,
};
