import React from "react";
import { useParams } from "react-router-dom";

const CaseStudy = () => {
	const { projectId } = useParams();

	return <h1>this is case study for {projectId}</h1>;
};

export default CaseStudy;
