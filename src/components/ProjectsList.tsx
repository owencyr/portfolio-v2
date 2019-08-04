import React from "react";
//Data Store
import PROJECTS from "./PROJECTS";
//Type
import { IProjectDetails } from "./PROJECTS";

export default function ProjectsList() {
	const renderTechIcons = (iconClassNames: string[]) => {
		return iconClassNames.map((item: string, index: number) => {
			return (
				<i
					key={`${index}`}
					className={`${item} portfolio-project-tech__icon`}
				/>
			);
		});
	};

	const readDescription = (description: string[]) => {
		return description.map((item: string, index: number) => {
			return (
				<p className="portfolio-project-description-paragraph" key={`${index}`}>
					{item}
				</p>
			);
		});
	};

	const renderProjects = () => {
		return PROJECTS.map((item: IProjectDetails, index: number) => {
			const { title, link, screenshot, tech, description, repo } = item;
			return (
				<li
					key={`${title}-project`}
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
					<div className={`portfolio-project-desc`}>
						{readDescription(description)}
					</div>
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
