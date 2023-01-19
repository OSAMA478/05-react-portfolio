import React from "react";

const Card = (props) => {
	const classes = ` rounded px-4  ${props.className}`;
	return (
		<div onClick={props.onClick} className={classes}>
			{props.children}
		</div>
	);
};

export default Card;
