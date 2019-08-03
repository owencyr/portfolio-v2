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

	const renderProjects = () => {
		return projects.map((item, index) => {
			const { title, link, screenshot, tech, desc, repo } = item;
			return (
				<li className={`portfolio-project`}>
					<p className={`portfolio-project-title`}>{title}</p>
					<a className={`portfolio-project-screenshot-link`} href={link}>
						<img
							src={screenshot}
							className={`portfolio-project-screenshot`}
							alt={title}
						/>
					</a>
					<p className={`portfolio-project-desc`}>{desc}</p>
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
