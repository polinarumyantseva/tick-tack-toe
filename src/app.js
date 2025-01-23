import { Field, Information } from './components';
import { store } from './store/store';
import { RESTART } from './store/actions';
import styles from './app.module.css';

export const App = () => {
	const handleStartAgain = () => {
		store.dispatch(RESTART);
	};

	return <AppLayout handleStartAgain={handleStartAgain} />;
};

const AppLayout = ({ handleStartAgain }) => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Игра «Крестики-Нолики»</h1>
				<div className={styles.wrapper}>
					<Field />
					<Information />
					<button className={styles['button-start-again']} onClick={handleStartAgain}>
						Начать заново
					</button>
				</div>
			</div>
		</div>
	);
};
