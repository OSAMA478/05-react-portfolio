import React from "react";

const Card = (props) => {
	const classes = ` rounded bg-[#0062B9] ${props.className}`;
	return <div className={classes}>{props.children}</div>;
};

export default Card;
