import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import About from "./Components/pages/About";
// import Achievement from "./Components/pages/Achievement";
// import Contact from "./Components/pages/Contact";
// import Home from "./Components/pages/Home";
// import CaseStudy from "./Components/pages/CaseStudy";
// import Projects from "./Components/pages/Projects";
import ContextProvider from "./Store/ContextProvider";
import React, { Suspense } from "react";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

const Projects = React.lazy(() => import("./Components/pages/Projects"));
const Home = React.lazy(() => import("./Components/pages/Home"));
const About = React.lazy(() => import("./Components/pages/About"));
const Contact = React.lazy(() => import("./Components/pages/Contact"));
const Achievement = React.lazy(() => import("./Components/pages/Achievement"));
const CaseStudy = React.lazy(() => import("./Components/pages/CaseStudy"));

const App = () => {
	return (
		<ContextProvider>
			<Navbar />
			<main className="h-[clac(100vh-3rem)] bg-slate-200 mt-12 ">
				<Suspense
					fallback={
						<div className="flex items-center justify-center w-screen h-screen bg-black">
							<LoadingSpinner />
						</div>
					}
				>
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
				</Suspense>
			</main>
		</ContextProvider>
	);
};

export default App;
