import React from "react";
import projects from "./projects";

export default function ProjectsList(props) {
	const renderProjects = () => {
		return projects.map((item, index) => {
			return (
				<li className={`portfolio__project`}>
					<p className={`portfolio-project-title`}>{item.title}</p>
					<a className={`portfolio-project-screenshot-link`} href={item.link}>
						<img
							src={item.screenshot}
							className={`portfolio-project-screenshot`}
							alt={item.title}
						/>
					</a>
					<p className={`portfolio-project-desc`}>${item.desc}</p>
					<p className={`portfolio-project-tech`}>${item.tech}</p>
					<a className={`portfolio-project-link`} href={item.link}>
						Github.io Deployment
					</a>
					<a className={`portfolio-project-repo`} href={item.repo}>
						Github Repository
					</a>
				</li>
			);
		});
	};
	return renderProjects();
}
