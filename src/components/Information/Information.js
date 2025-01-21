import PropTypes from 'prop-types';
import styles from './information.module.css';
import { store } from '../../store/store';
import { useSubscribe } from '../../hooks';

const InformationLayout = ({ status }) => {
	return <div className={styles.status}>{status}</div>;
};

export const Information = () => {
	const { currentPlayer, flags } = store.getState();
	const { isDraw, isGameEnded } = flags;

	useSubscribe();

	let status = '';

	if (isDraw) {
		status = 'Ничья';
	} else if (!isDraw && isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}
	return <InformationLayout status={status} />;
};

InformationLayout.propTypes = {
	status: PropTypes.string,
};
