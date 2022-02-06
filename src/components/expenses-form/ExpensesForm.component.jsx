import React, { useState } from 'react';
import './expensesForm.styles.css';

const ExpensesForm = ({ onSaveExpenseData, hideForm }) => {
	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredPrice: '',
		enteredDate: '',
	});

	const titleChangeHandler = (e) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredTitle: e.target.value };
		});
	};

	const priceChangeHandler = (e) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredPrice: e.target.value };
		});
	};

	const dateChangeHandler = (e) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredDate: e.target.value };
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: userInput.enteredTitle,
			price: +userInput.enteredPrice,
			date: new Date(userInput.enteredDate),
		};
		setUserInput({
			enteredTitle: '',
			enteredPrice: '',
			enteredDate: '',
		});
		onSaveExpenseData(expenseData);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={userInput.enteredTitle}
						required
						onChange={titleChangeHandler}
					/>
				</div>

				<div className='new-expense__control'>
					<label>Price</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={userInput.enteredPrice}
						required
						onChange={priceChangeHandler}
					/>
				</div>

				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2050-01-01'
						value={userInput.enteredDate}
						required
						onChange={dateChangeHandler}
					/>
				</div>
			</div>

			<div className='new-expense__actions'>
				<button type='button' onClick={hideForm}>
					Cancel
				</button>
				<button type='submit'>Add New expense</button>
			</div>
		</form>
	);
};

export default ExpensesForm;
