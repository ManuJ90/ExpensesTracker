import React from 'react';
import './expenseItem.styles.css';
import Card from '../card/Card.component';

import ExpenseDate from '../date/ExpenseDate.component';

const ExpenseItem = ({ title, date, price }) => {
	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={date} />

				<div className='expense-item__description'>
					<h2>{title}</h2>
				</div>

				<div className='expense-item__price'>${price}</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
