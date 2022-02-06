import React from 'react';
import './expensesList.styles.css';
import ExpenseItem from '../expense-item/ExpenseItem.component';

const ExpensesList = ({ items }) => {

	if (items.length === 0) {
		return (
			<h2 className='expenses-list__fallback'>There are no expenses here</h2>
		);
	}

	return (
		<ul className='expenses-list'>
			{items.map((item, index) => (
				<ExpenseItem
					key={index}
					title={item.title}
					price={item.price}
					date={item.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
