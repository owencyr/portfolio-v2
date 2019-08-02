import React from "react";
import ProjectsList from "./ProjectsList";
import "./styles/css/App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header" />
			<body>
				<main role="main">
					<div className="portfolio-container">
						<section className="portfolio-intro-pane">
							<p className="portfolio-intro-pane__name">Owen Cyr</p>
							<p className="portfolio-intro-pane__occupation">
								Full-Stack Developer
							</p>
							<img
								className="portfolio-image"
								src="selfphoto.jpg"
								alt="Owen Cyr"
							/>
						</section>
						<section class="portfolio-details-pane">
							<p class="portfolio-details__about">
								I am a spatial thinker with a GIS background who came to the
								realization that coding was the way to break the ceiling I had
								above me. My greatest asset is not what I know now, but what I
								will be learning to supplement my skillset in order to realize
								your next project. In another life, I am an organizational
								network analyst.
							</p>
							<div class="portfolio-projects-list">
								<h2>Projects:</h2>
								<ProjectsList />
								<ul class="list" />
							</div>
						</section>
						<section class="contact-pane">
							<a href="https://github.com/owencyr">
								<i class="fab fa-github-square" />
							</a>
							<a href="https://www.linkedin.com/in/cyroc/">
								<i class="fab fa-linkedin" />
							</a>
							<a href="mailto:cyroc@dukes.jmu.edu">
								<i class="fas fa-envelope-square" />
							</a>
						</section>
					</div>
				</main>
			</body>
		</div>
	);
}

export default App;
