
import { Routes, Route } from "react-router-dom";


import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Certificates from "./pages/certificates";
import Contact from "./pages/contact";


import "./app.css";

function App() {
	
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/certificates" element={<Certificates />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
