import React, { useState } from 'react';
import './newExpense.styles.css';
import ExpensesForm from '../expenses-form/ExpensesForm.component';

const NewExpense = (props) => {
	const [formDisplay, setFormDisplay] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setFormDisplay(false)
	};

	const formDisplayHandler = () => {
		setFormDisplay(true);
	};

	const formHideHandler = () => {
		setFormDisplay(false);
	};

	return (
		<div className='new-expense'>
			{!formDisplay && (
				<button onClick={formDisplayHandler}>Add new expense</button>
			)}
			{formDisplay ? (
				<ExpensesForm onSaveExpenseData={saveExpenseDataHandler} hideForm={formHideHandler} />
			) : null}
		</div>
	);
};

export default NewExpense;
