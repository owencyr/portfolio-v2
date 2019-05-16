import React from "react";
import projects from "./projects";

export default function ProjectsList(props) {
	const renderProjects = () => {
		return projects.map((item, index) => {
			return (
				<li className="project-${index}">
					<ul>
						<li className="title">
							<h2>{item.title}</h2>
						</li>
						<li className="screenshot">
							<a href={item.link}>
								<img
									src={item.screenshot}
									className="screenshot"
									alt={item.title}
								/>
							</a>
						</li>
						<li className="desc">${item.desc}</li>
						<li className="tech">${item.tech}</li>
						<li className="link">
							<a href={item.link} />
							Github.io Deployment
						</li>
						<li className="repo">
							<a href={item.repo} />
							Github Repository
						</li>
					</ul>
				</li>
			);
		});
	};
	return renderProjects();
}
