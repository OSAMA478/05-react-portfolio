import React, { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";

const Projects = (props) => {
	const [projectId, setProjectId] = useState("project1");

	const centeredWithFlex = "flex items-center justify-center";
	return (
		<div className={`h-[calc(100vh-3rem)] `}>
			<h1 className="text-xl font-bold text-center ">PROJECTS</h1>
			<div className={` flex  `}>
				<div className={`${centeredWithFlex} relative w-1/2 p-4`}>
					<div className="w-11/12 mx-auto overflow-hidden text-center rounded-lg lg:w-9/12">
						<div className="">
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
									className="h-full"
									src={props.projectData[projectId].projectImgPath}
									alt="project screenshot"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={`${centeredWithFlex} w-1/2 p-4 flex-col`}>
					<ul className="[&>*]:text-xs">
						{Object.keys(props.projectData).map((projectId) => {
							return (
								<li
									className="cursor-pointer"
									onClick={() => {
										setProjectId(projectId);
									}}
									key={projectId}
								>
									{props.projectData[projectId].projectName}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className={`${centeredWithFlex}`}>
				<h1 className={`${centeredWithFlex} w-1/2`}>
					{props.projectData[projectId].projectName}
				</h1>

				<div className={`${centeredWithFlex} w-1/2`}>
					<Link to={`/projects/${projectId}/case-study`}>
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
