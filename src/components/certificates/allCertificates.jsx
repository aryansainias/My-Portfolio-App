import React from "react";
import Certificate from "./certificate";


import INFO from "../../data/user";

import "../projects/styles/allProjects.css";

const AllCertificates = () => {
	return (
		<div className="all-projects-container">
			{INFO.certificates.map((certificate, index) => (
				<div className="all-projects-project" key={index}>
					<Certificate
						logo={certificate.logo}
						title={certificate.title}
						description={certificate.description}
						date={certificate.date}
						linkText={certificate.linkText}
						verifyLink={certificate.verifyLink}
					/>
				</div>
			))}
		</div>
	);
};

export default AllCertificates;
