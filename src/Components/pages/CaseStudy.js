import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import ProjectContext from "../../Store/create-context";
import Card from "../UI/Card";

const CaseStudy = () => {
	const { projectId } = useParams();
	const projectDataCtx = useContext(ProjectContext);
	const projectData = projectDataCtx[projectId];
	const centeredWithFlex = `flex justify-center item-center`;
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
			<div className={`h-[calc(100vh-3rem)] flex p-1/2 bg-slate-100 `}>
				<div
					className={`${centeredWithFlex} mx-auto my-auto  relative w-1/2 p-4`}
				>
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
									src={projectDataCtx[projectId].projectImgPath}
									alt="project screenshot"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`h-[calc(100vh-3rem)] pt-6 my-0 mx-auto w-1/2 flex flex-col justify-around`}
			>
				<div className="">
					<h1 className="py-2 font-bold ">Overview</h1>
					<p className="text-xs">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
				</div>
				<div>
					<h1 className="py-2 font-bold ">Tool Used</h1>
					<div className="flex flex-wrap gap-4">
						{projectData.technologyUsed.map((tech) => {
							return <Card className="p-1 text-xs bg-slate-400 ">{tech}</Card>;
						})}
					</div>
				</div>
				<div>
					<h1 className="py-2 font-bold ">See Live</h1>
					<div className="flex items-center gap-4 ">
						<a>
							<Card className="p-1 bg-sky-400 ">Live Link</Card>
						</a>
						<a>
							<Card className="p-1 border-2 border-sky-400">Code Link</Card>
						</a>
					</div>
				</div>
			</div>
			;
		</Fragment>
	);
};
export default CaseStudy;
