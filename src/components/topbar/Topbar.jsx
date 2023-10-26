import React, { useState, useEffect } from "react";
import { Link, Element, Events, scrollSpy } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import "./topbar.css";

const Topbar = () => {
	const [activeNav, setActiveNav] = useState("home");

	// Function to update activeNav based on scroll position
	const handleScroll = () => {
		const home = document.getElementById("home");
		const about = document.getElementById("about");
		const experience = document.getElementById("experience");
		const portfolio = document.getElementById("portfolio");
		const contact = document.getElementById("contact");
		const scrollY = window.scrollY;

		if (scrollY < about.offsetTop) {
			setActiveNav("home");
		} else if (scrollY < experience.offsetTop) {
			setActiveNav("about");
		} else if (scrollY < portfolio.offsetTop) {
			setActiveNav("experience");
		} else if (scrollY < contact.offsetTop) {
			setActiveNav("portfolio");
		} else {
			setActiveNav("contact");
		}
	};


	// Add scroll event listener
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		scrollSpy.update();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Function to update activeNav when a link is clicked
	const handleLinkClick = (nav) => {
		if (nav === activeNav) {
			setActiveNav(""); // Deselect if the same tab is clicked
		} else {
			setActiveNav(nav);
		}
	};

	return (
		<nav>
			<Link
				to="home"
				spy={true}
				smooth={true}
				offset={0}
				duration={50}
				className={activeNav === "home" ? "active" : ""}
				onClick={() => handleLinkClick("home")}
			>
				<AiOutlineHome />
			</Link>
			<Link
				to="about"
				spy={true}
				smooth={true}
				offset={0}
				duration={50}
				className={activeNav === "about" ? "active" : ""}
				onClick={() => handleLinkClick("about")}
			>
				<AiOutlineUser />
			</Link>
			<Link
				to="experience"
				spy={true}
				smooth={true}
				offset={0}
				duration={50}
				className={activeNav === "experience" ? "active" : ""}
				onClick={() => handleLinkClick("experience")}
			>
				<BiBook />
			</Link>
			<Link
				to="portfolio"
				spy={true}
				smooth={true}
				offset={0}
				duration={50}
				className={activeNav === "portfolio" ? "active" : ""}
				onClick={() => handleLinkClick("portfolio")}
			>
				<RiServiceLine />
			</Link>
			<Link
				to="contact"
				spy={true}
				smooth={true}
				offset={0}
				duration={50}
				className={activeNav === "contact" ? "active" : ""}
				onClick={() => handleLinkClick("contact")}
			>
				<BiMessageSquareDetail />
			</Link>
		</nav>
	);
};

export default Topbar;
