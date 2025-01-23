import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCurrentPlayer, selectFlagIsGameEnded, selectFlagIsDraw } from '../../store/selectors';
import styles from './information.module.css';

const InformationLayout = ({ status }) => {
	return <div className={styles.status}>{status}</div>;
};

export const Information = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isDraw = useSelector(selectFlagIsDraw);
	const isGameEnded = useSelector(selectFlagIsGameEnded);

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
