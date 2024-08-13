import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');

	const displayValue = operand1 + operator + operand2;

	const buttonList = () => {
		const listOfButton = numbers.map((button, index) => (
			<button
				className={styles.button}
				key={index}
				onClick={() => handleClick(button)}
			>
				{' '}
				{button}{' '}
			</button>
		));
		return listOfButton;
	};

	const handleClick = (item) => {
		if (operand1 === '') {
			setOperand1(item);
		} else if (!operator && operand1[0] === '0') {
			setOperand1(item);
		} else if (operator) {
			setOperand2((prevState) => prevState + item);
		} else {
			setOperand1((prevState) => prevState + item);
		}
	};

	const hendleOperator = (op) => {
		if (operator === '') {
			setOperator(op);
		}
	};

	const hendleSet = () => {
		// eslint-disable-next-line default-case
		switch (operator) {
			case '+':
				setOperand1(Number(operand1) + Number(operand2));
				setOperand2('');
				setOperator('');
				break;
			case '-':
				setOperand1(Number(operand1) - Number(operand2));
				setOperand2('');
				setOperator('');
				break;
		}
	};

	const cleanAll = () => {
		setOperand1('0');
		setOperand2('');
		setOperator('');
	};
	return (
		<div className={styles.container}>
			<div className={styles.display}> {displayValue} </div>

			<div className={styles.buttons}>
				{buttonList()}
				<button
					className={`${styles.button} ${styles.plus}`}
					onClick={() => hendleOperator('+')}
				>
					{' '}
					+{' '}
				</button>
				<button
					className={`${styles.button} ${styles.minus}`}
					onClick={() => hendleOperator('-')}
				>
					{' '}
					-{' '}
				</button>
				<button className={`${styles.button} ${styles.res}`} onClick={hendleSet}>
					{' '}
					={' '}
				</button>
				<button className={`${styles.button} ${styles.clear}`} onClick={cleanAll}>
					{' '}
					C{' '}
				</button>
			</div>
		</div>
	);
};
