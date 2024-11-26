import PropTypes from 'prop-types';
import styles from './information.module.css';

const InformationLayout = ({ status }) => {
	return <div className={styles.status}>{status}</div>;
};

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	let status = '';

	console.log('currentPlayer', currentPlayer);

	if (isDraw) {
		status = 'Ничья';
	} else if (!isDraw && isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}
	return <InformationLayout status={status} />;
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

InformationLayout.propTypes = {
	status: PropTypes.string,
};
