import React from "react";

const Card = (props) => {
	const classes = ` rounded  ${props.className}`;
	return (
		<div onClick={props.onClick} className={classes}>
			{props.children}
		</div>
	);
};

export default Card;
