import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/pages/About";
import Achievement from "./Components/pages/Achievement";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import CaseStudy from "./Components/pages/CaseStudy";
import Projects from "./Components/pages/Projects";

const App = () => {
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
						<Projects />
					</Route>
					<Route path="/achievements">
						<Achievement />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path={`/projects/:projectId/case-study`}>
						<CaseStudy />
					</Route>
				</Switch>
			</main>
		</>
	);
};

export default App;
