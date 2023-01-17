import { SiTailwindcss } from "react-icons/si";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./Components/pages/About";
import Achievement from "./Components/pages/Achievement";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import Projects from "./Components/pages/Projects";

const App = () => {
	return (
		<main className="flex items-center justify-center h-screen">
			{/* <p className="p-2 text-2xl capitalize bg-red-300">
				use this template for react practice with tailwind
				<SiTailwindcss className="inline mx-1 text-cyan-500" />

			</p> */}
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
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/achievements">
					<Achievement />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</main>
	);
};

export default App;
