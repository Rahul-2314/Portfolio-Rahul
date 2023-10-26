import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
		<footer>
			<a href="#home" className="footer__logo">
				𝕽𝖆𝖍𝖚𝖑 𝕮𝖍𝖔𝖜𝖉𝖍𝖚𝖗𝖞
			</a>
			<ul className="permalinks">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Skills</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer__socials">
				<a
					href="https://www.linkedin.com/in/rahul-chowdhury-45b61828b/"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin />
				</a>
				<a
					href="https://github.com/Rahul-2314"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub />
				</a>
				<a
					href="https://stack.angellist.com/company/rechargeroute"
					target="_blank"
					rel="noreferrer"
				>
					<FaAngellist />
				</a>
			</div>
			<div className="footer__copyright">
				<small>Copyright &copy; {getYear()}, Rahul Chowdhury. All rights reserved.</small>
			</div>
		</footer>
	);
}

export default Footer
