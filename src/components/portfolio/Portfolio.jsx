import React from 'react';
import IMG1 from '../../assets/todo.png';
import IMG2 from '../../assets/textutils.png';
import IMG3 from '../../assets/pdf.jpg';
import IMG4 from '../../assets/news.jpg';
import IMG5 from '../../assets/game.jpg';
import IMG6 from '../../assets/ml.jpg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
		{
			id: 1,
			title: "To-Do-List Website",
			img: IMG1,
			description: "User friendly app to plan your day and manage tasks.",
			technologies: "HTML | CSS | JavaScript | Webpack",
			link: "https://action-plan.netlify.app/",
			github: "https://github.com/Rahul-2314/WebDev/tree/main/to_do_list",
		},
		{
			id: 2,
			title: "TextUtils - React App",
			img: IMG2,
			description:
				"TextUtils is an utility app which helps people to manipulate text",
			technologies: "React | Redux",
			link: "https://textutilsplus.netlify.app/",
			github: "https://github.com/Rahul-2314/TextUtils-React",
		},
		{
			id: 3,
			title: "pdf_merger App",
			img: IMG3,
			description: "pdf merger merge multiple pdf into one.",
			technologies: "Python",
			github:
				"https://github.com/Rahul-2314/Python/tree/main/programs/pdf_merger",
		},
		{
			id: 4,
			title: "World News App",
			img: IMG4,
			description: "Fully responsive interactive news app ",
			technologies: "Python",
			github:
				"https://github.com/Rahul-2314/Python/blob/main/programs/news_app.py",
		},
		{
			id: 5,
			title: "Snake-Water-Gun Game",
			img: IMG5,
			description:
				"Snake water gun game by python revives your childhood memory.",
			technologies: "Python",
			github:
				"https://github.com/Rahul-2314/Python/blob/main/programs/snake_water_Game.py",
		},
		{
			id: 6,
			title: "Placement Predictor Model",
			img: IMG6,
			description:
				"Show your chance of getting placement using data of cgpa and IQ.",
			technologies: "Python | Machine Learning",
			github: "https://github.com/Rahul-2314/Machine-Learning/tree/EndToEnd_ML",
		},
	];

  return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{soloProjects.map((pro) => (
					<article className="portfolio__item" key={pro.id}>
						<div className="portfolio__item-image">
							<img src={pro.img} alt={pro.title} />
						</div>
						<div className="portfolio__item-content">
							<h3>{pro.title}</h3>
							<p>{pro.description}</p>
							<p>{pro.technologies}</p>
						</div>
						<div className="portfolio__item-cta">
							<a
								href={pro.github}
								target="_blank"
								className="btn"
								rel="noreferrer"
							>
								GitHub
							</a>
							{pro.link && ( // Check if pro.link is present
								<a
									href={pro.link}
									target="_blank"
									className="btn btn-primary"
									rel="noreferrer"
								>
									Visit Website
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
