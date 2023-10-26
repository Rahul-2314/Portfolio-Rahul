import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/Rahul.jpg";
import "./intro.css";

const Intro = () => {
	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="me" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>2+ year (freelancer)</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>5+ Completed Projects</small>
						</article>
					</div>
					<p>
						"Hello, tech enthusiasts and fellow learners! I'm Rahul Chowdhury, a
						passionate software developer with a diverse skill set that includes
						HTML, CSS, JavaScript, Python, MySQL, MongoDB, data science, and
						machine learning. In today's rapidly evolving digital landscape,
						I've made it my mission to bridge the gap between cutting-edge
						technology and real-world applications. Join me as we delve into the
						exciting realms of software development, data analysis, and the
						fascinating world of machine learning. Whether you're a seasoned
						coder or just beginning your journey, there's something here for
						everyone. Let's embark on this knowledge adventure together!"
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default Intro;
