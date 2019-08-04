export interface IProjectDetails {
	title: string;
	description: string[];
	tech: string[];
	link: string;
	repo: string;
	screenshot: string;
}

const PROJECTS: IProjectDetails[] = [
	// {
	// 	title: "Bookmarks App",
	// 	description: [
	// 		"In today's world, movies are released at a fever pace.",
	// 		"It can be hard to remember your initial reaction to the movie before the media cycle hypes the movie up to being the greatest movie america has ever seen.",
	// 		"This bookmark manager allows the user to keep a running database of movies that they have watched recently, including the description of the movie, url, and their own rating of the movie.",
	// 		"Maintain a database of your movie recommendations, accessible at any time on the web."
	// 	],
	// 	tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square"],
	// 	link: "https://thinkful-ei-armadillo.github.io/owen-robert-bookmarks",
	// 	repo: "https://github.com/thinkful-ei-armadillo/owen-robert-bookmarks",
	// 	screenshot: "bookmarkscreen.png"
	// },
	{
		title: "myCongress",
		description: [
			"With MyCongress, you can access information on Congressmembers' efficiency with their bill sponsorship and vote frequency.",
			"On the dashboard linked below, you may search for Congressmembers by name or state.",
			"You can also compare two members either through the 'Compare Members' link in the navigation bar or on the bottom of each member's page."
		],
		tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square"],
		link: "https://mycongress.now.sh/",
		repo: "https://github.com/thinkful-ei-armadillo/congress-app-server",
		screenshot: "mycongressscreen.png"
	}
];
export default PROJECTS;
