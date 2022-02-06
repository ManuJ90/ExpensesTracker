import React, { useState } from 'react';
import Expenses from './components/expenses/Expenses.component';
import NewExpense from './components/new-expense/NewExpense.component';

const DUMMY = [
	{
		title: 'Internet Bill',
		price: '3500',
		date: new Date(2022, 0, 24),
	},
	{
		title: 'Netflix',
		price: '1500',
		date: new Date(2021, 3, 4),
	},
	{
		title: 'Store',
		price: '500',
		date: new Date(2020, 4, 15),
	},
	{
		title: 'BarberShop',
		price: '700',
		date: new Date(2020, 6, 28),
	},
];

function App() {

	const [expenses, setExpenses] = useState(DUMMY)


	const addExpenseHandler = (expense) => {
		setExpenses(prevExpenses => ([expense, ...prevExpenses]))
	};

	return (
		<div className='App'>
			<h1>Expenses</h1>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
