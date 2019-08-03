import React from "react";
import ProjectsList from "./ProjectsList";

export default function Portfolio() {
	return (
		<div className="portfolio-container">
			<section className="portfolio-intro-pane">
				<p className="portfolio-intro-pane__name">Owen Cyr</p>
				<p className="portfolio-intro-pane__occupation">Full-Stack Developer</p>
				<img className="portfolio-image" src="selfphoto.jpg" alt="Owen Cyr" />
			</section>
			<section className="portfolio-details-pane">
				<p className="portfolio-details__about">
					I am a spatial thinker with a GIS background who came to the
					realization that coding was the way to break the ceiling I had above
					me. My greatest asset is not what I know now, but what I will be
					learning to supplement my skillset in order to realize your next
					project. In another life, I am an organizational network analyst.
				</p>
				<div className="portfolio-projects-list">
					<h2 className="portfolio-projects-list-header">Projects</h2>
					<div className="portfolio-projects-list-container">
						<ProjectsList />
					</div>
				</div>
			</section>
			<section className="portfolio-contact-pane">
				<a href="https://github.com/owencyr">
					<i className="fab fa-github-square" />
				</a>
				<a href="https://www.linkedin.com/in/cyroc/">
					<i className="fab fa-linkedin" />
				</a>
				<a href="mailto:cyrowenwork@gmail.com">
					<i className="fas fa-envelope-square" />
				</a>
			</section>
		</div>
	);
}
