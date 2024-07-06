import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";



import "../projects/styles/project.css";

const Certificate = (props) => {
	const { logo,date,title, description, linkText, verifyLink } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={verifyLink}>
					<div className="project-container">
					<img className="project-logo" src={logo} alt="certificatelogo" />
						
                        
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
                        <div className="project-link">{date}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Certificate;
