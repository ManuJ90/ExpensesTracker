import React from 'react';
import './card.styles.css';

const Card = (props) => {
	const content = props.children;
	const classes = `card ${props.className}`;

	return <div className={classes}>{content}</div>;
};

export default Card;
