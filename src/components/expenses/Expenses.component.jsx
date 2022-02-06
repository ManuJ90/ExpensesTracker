import React, { useState } from 'react';
import Card from '../card/Card.component';
import ExpensesChart from '../expenses-chart/ExpensesChart.component';
import ExpensesFilter from '../expenses-filter/ExpensesFilter.component';
import ExpensesList from '../expenses-list/ExpensesList.component';
import './expenses.styles.css';

const Expenses = ({ items }) => {
	const [filterYear, setFilteredYear] = useState('2022');

	const filterChangeHandle = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = items.filter((item) => {
		return item.date.getFullYear().toString() === filterYear;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					onChangeFilter={filterChangeHandle}
					selected={filterYear}
				/>
				<ExpensesChart expenses={filteredExpenses}/>
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
