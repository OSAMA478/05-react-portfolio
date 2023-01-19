import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../UI/Card";

const CaseStudy = (props) => {
	const { projectId } = useParams();
	const projectData = props.projectData[projectId];
	return (
		<Fragment>
			<div className={`h-[calc(100vh-3rem)] flex justify-center items-center`}>
				<div className="flex flex-col items-center justify-around h-2/3">
					<h1 className="text-2xl font-bold">{projectData.projectName}</h1>
					<p>{projectData.projectDescription}</p>
					<a href={projectData.liveLink}>
						<Card className="font-bold bg-white cursor-pointer">Live Link</Card>
					</a>
				</div>
			</div>
			;<div className={`h-[calc(100vh-3rem)] bg-slate-100 `}></div>;
			<div className={`h-[calc(100vh-3rem)] `}></div>;
		</Fragment>
	);
};
export default CaseStudy;
