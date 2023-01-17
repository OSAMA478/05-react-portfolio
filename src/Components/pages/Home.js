import React from "react";
import { Link } from "react-router-dom";
import backgroundSvg from "../../img/subtle-prism.svg";
import Card from "../UI/Card";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
const Home = () => {
	const centerWithFlex = "flex items-center justify-center";
	return (
		<div className={`h-[calc(100vh-3rem)] relative bg-slate-800 `}>
			<img
				className="absolute w-full h-[calc(100vh-3rem)] "
				src={backgroundSvg}
				alt="background svg"
			/>
			<div className="absolute flex justify-between w-full -translate-y-1/2 top-1/2">
				<div className="flex flex-col justify-center w-8 h-64 ">
					<a
						href="https://www.linkedin.com/in/osama-shaikh-790b6a118"
						className={`${centerWithFlex} border-2 border-b-0 aspect-square`}
					>
						<div className={`${centerWithFlex} w-3/4 h-3/4`}>
							<FaLinkedin className="w-full h-full" />
						</div>
					</a>
					<a
						href="https://github.com/OSAMA478"
						className={`${centerWithFlex} border-2 border-b-0 aspect-square`}
					>
						<div className={`${centerWithFlex} w-3/4 h-3/4`}>
							<BsGithub className="w-full h-full" />
						</div>
					</a>
					<a
						href="mailto:shaikhosama478@gmail.com"
						className={`${centerWithFlex} border-2 aspect-square`}
					>
						<div className={`${centerWithFlex} w-3/4 h-3/4`}>
							<MdOutgoingMail className="w-full h-full" />
						</div>
					</a>
				</div>
				<div className={`${centerWithFlex} flex-col w-1/2 h-64 gap-8`}>
					<h1 className="text-2xl font-bold text-center ">
						HEY, MY NAME IS OSAMA SHAIKH
					</h1>
					<p className="">a web developer</p>
					<Link to="/projects">
						<Card className="p-2 text-center bg-white rounded-lg ">
							<p className="px-8 ">PROJECTS</p>
						</Card>
					</Link>
				</div>
				<div className="w-16 h-64"></div>
			</div>
		</div>
	);
};

export default Home;
