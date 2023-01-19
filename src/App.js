import { useState } from "react";
import {
	Switch,
	Route,
	Redirect,
	useParams,
	useHistory,
	useLocation,
	useRouteMatch,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/pages/About";
import Achievement from "./Components/pages/Achievement";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import Projects from "./Components/pages/Projects";

const App = () => {
	const param = useParams();
	const history = useHistory();
	const location = useLocation();
	const match = useRouteMatch();

	const [projectId, setProjectId] = useState();
	function onCaseStudy(projectId) {
		console.log(projectId);
		setProjectId(projectId);
	}

	console.log({ param, history, location, match });
	return (
		<>
			<Navbar />
			<main className="h-[clac(100vh-3rem)] bg-slate-200 ">
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
						<Projects onCaseClick={onCaseStudy} />
					</Route>
					<Route path="/achievements">
						<Achievement />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path={`/projects/:projectId/caseStudy`}>
						<h1>this is case study for {projectId}</h1>
					</Route>
				</Switch>
			</main>
		</>
	);
};

export default App;
