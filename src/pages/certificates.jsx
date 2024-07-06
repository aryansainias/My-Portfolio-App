import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllCertificates from "../components/certificates/allCertificates";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";


const Certificates = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "certificates");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Certificates | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="certificates" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
						Certificates & Achievements
						</div>

						<div className="subtitle-project-sub" >
						This section showcases my professional certifications, awards, and other relevant credentials. I've chosen to highlight these achievements to demonstrate my commitment to continuous learning and my ability to adapt to new technologies and industry trends.
						</div>

            <div className="projects-list">
							<AllCertificates />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Certificates;
