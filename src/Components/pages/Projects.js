import React, { useState } from "react";
import { Link } from "react-router-dom";

import project1Path from "../../ProjectImages/project1.png";
import project2Path from "../../ProjectImages/project2.png";
import project3Path from "../../ProjectImages/project3.png";
import project4Path from "../../ProjectImages/project4.png";
import project5Path from "../../ProjectImages/project5.png";
import project6Path from "../../ProjectImages/project6.png";
import project7Path from "../../ProjectImages/project7.png";
import project8Path from "../../ProjectImages/project8.png";
import project9Path from "../../ProjectImages/project9.png";

import Card from "../UI/Card";

const Projects = (props) => {
	const [projectId, setProjectId] = useState("project1");

	const projectData = {
		project1: {
			projectName: "E-commerse Website",
			projectImgPath: project1Path,
		},
		project2: {
			projectName: "Note book",
			projectImgPath: project2Path,
		},
		project3: {
			projectName: "Music animation",
			projectImgPath: project3Path,
		},
		project4: {
			projectName: "Card hover effect",
			projectImgPath: project4Path,
		},
		project5: {
			projectName: "Product card hover",
			projectImgPath: project5Path,
		},
		project6: {
			projectName: "Analog clock",
			projectImgPath: project6Path,
		},
		project7: {
			projectName: "Word clock",
			projectImgPath: project7Path,
		},
		project8: {
			projectName: "Stopwatch",
			projectImgPath: project8Path,
		},
		project9: {
			projectName: "Dropdown",
			projectImgPath: project9Path,
		},
	};

	const centeredWithFlex = "flex items-center justify-center";
	return (
		<div className={`h-[calc(100vh-5rem)] `}>
			<h1 className="text-xl font-bold text-center ">PROJECTS</h1>
			<div className={` flex  `}>
				<div className={`${centeredWithFlex} relative w-1/2 p-4`}>
					<div className="w-11/12 mx-auto overflow-hidden text-center rounded-lg lg:w-9/12">
						<div className="w-full">
							<div className="shadow-2xl">
								<div className="flex items-center flex-none px-4 bg-black rounded-b-none h-11 rounded-xl">
									<div className="[&>*]:w-3 [&>*]:h-3 [&>*]:rounded-full flex space-x-1.5">
										<div className="bg-red-500"></div>
										<div className="bg-yellow-500"></div>
										<div className="bg-green-500"></div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div
								className={`${centeredWithFlex}  bg-slate-400 w-full shadow-lg aspect-video `}
							>
								<img
									className="h-5/6"
									src={projectData[projectId].projectImgPath}
									alt="project screenshot"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={`${centeredWithFlex} w-1/2 p-4 flex-col`}>
					<ul className="[&>*]:text-xs">
						{Object.keys(projectData).map((projectId) => {
							return (
								<li
									className="cursor-pointer"
									onClick={() => {
										setProjectId(projectId);
									}}
									key={projectId}
								>
									{projectData[projectId].projectName}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className={`${centeredWithFlex}`}>
				<h1 className={`${centeredWithFlex} w-1/2`}>
					{projectData[projectId].projectName}
				</h1>

				<div className={`${centeredWithFlex} w-1/2`}>
					<Link
						onClick={() => {
							props.onCaseClick(projectId);
						}}
						to={`/projects/${projectId}/caseStudy`}
					>
						<Card className="p-2 text-center rounded-lg bg-sky-500 ">
							CASE STUDY
						</Card>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Projects;
