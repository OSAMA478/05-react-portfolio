import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/pages/About";
import Achievement from "./Components/pages/Achievement";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import CaseStudy from "./Components/pages/CaseStudy";
import Projects from "./Components/pages/Projects";

import project1Path from "./ProjectImages/project1.png";
import project2Path from "./ProjectImages/project2.png";
import project3Path from "./ProjectImages/project3.png";
import project4Path from "./ProjectImages/project4.png";
import project5Path from "./ProjectImages/project5.png";
import project6Path from "./ProjectImages/project6.png";
import project7Path from "./ProjectImages/project7.png";
import project8Path from "./ProjectImages/project8.png";
import project9Path from "./ProjectImages/project9.png";

const App = () => {
	const projectData = {
		project1: {
			projectName: "E-commerse Website",
			projectImgPath: project1Path,
			projectDescription: "this is my first Project",
			liveLink: "https://osama478.github.io/11-E-commerce-websie/",
		},
		project2: {
			projectName: "Note book",
			projectImgPath: project2Path,
			projectDescription: "this is my second Project",
			liveLink: "https://osama478.github.io/01-css-notes-project/",
		},
		project3: {
			projectName: "Music animation",
			projectImgPath: project3Path,
			projectDescription: "this is my third Project",
			liveLink: "https://osama478.github.io/02-css-music-animation/",
		},
		project4: {
			projectName: "Card hover effect",
			projectImgPath: project4Path,
			projectDescription: "this is my fourth Project",
			liveLink: "https://osama478.github.io/10-css-card-hover-effect/",
		},
		project5: {
			projectName: "Product card hover",
			projectImgPath: project5Path,
			projectDescription: "this is my fifth Project",
			liveLink: "https://osama478.github.io/08-css-creative-product-card/",
		},
		project6: {
			projectName: "Analog clock",
			projectImgPath: project6Path,
			projectDescription: "this is my sixth Project",
			// liveLink : ,
		},
		project7: {
			projectName: "Word clock",
			projectImgPath: project7Path,
			projectDescription: "this is my seventh Project",
			// liveLink : ,
		},
		project8: {
			projectName: "Stopwatch",
			projectImgPath: project8Path,
			projectDescription: "this is my eighth Project",
			// liveLink : ,
		},
		project9: {
			projectName: "Dropdown",
			projectImgPath: project9Path,
			projectDescription: "this is my ninth Project",
			liveLink: "https://osama478.github.io/14-css-custom-select-box/",
		},
	};
	return (
		<>
			<Navbar />
			<main className="h-[clac(100vh-3rem)] bg-slate-200 mt-12 ">
				<Switch>
					<Route path="/" exact>
						<Redirect to="/home" />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/projects" exact>
						<Projects projectData={projectData} />
					</Route>
					<Route path="/achievements">
						<Achievement />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path={`/projects/:projectId/case-study`}>
						<CaseStudy projectData={projectData} />
					</Route>
				</Switch>
			</main>
		</>
	);
};

export default App;
