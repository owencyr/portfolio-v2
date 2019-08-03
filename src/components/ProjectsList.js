import React from "react";
import projects from "./PROJECTS";
import "../styles/css/ProjectsList.css";

export default function ProjectsList(props) {
	const renderTechIcons = iconClassNames => {
		return iconClassNames.map((item, index) => {
			return (
				<i
					key={`${index}`}
					className={`${item} portfolio-project-tech__icon`}
				/>
			);
		});
	};

	const readDescription = description => {
		return description.map((item, index) => {
			return (
				<p className="portfolio-project-description-paragraph" key={`index`}>
					{item}
				</p>
			);
		});
	};

	const renderProjects = () => {
		return projects.map((item, index) => {
			const { title, link, screenshot, tech, description, repo } = item;
			return (
				<li
					className={`portfolio-project ${
						index % 2 === 0
							? "portfolio--project-light"
							: "portfolio--project-dark"
					}`}>
					<p className={`portfolio-project-title`}>{title}</p>
					<a className={`portfolio-project-screenshot-link`} href={link}>
						<img
							src={screenshot}
							className={`portfolio-project-screenshot`}
							alt={title}
						/>
					</a>
					<p className={`portfolio-project-desc`}>
						{readDescription(description)}
					</p>
					<p className={`portfolio-project-tech`}>{renderTechIcons(tech)}</p>
					<a className={`portfolio-project-link`} href={link}>
						Project Website
					</a>
					<a className={`portfolio-project-repo`} href={repo}>
						Repository
					</a>
				</li>
			);
		});
	};
	return renderProjects();
}
