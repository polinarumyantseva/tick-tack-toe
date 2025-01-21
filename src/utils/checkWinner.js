import { WIN_PATTERNS } from '../constants';

export const checkWinner = (newFields, currentPlayer) => {
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
