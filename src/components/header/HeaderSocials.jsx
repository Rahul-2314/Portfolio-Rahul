import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/rahul-chowdhury-45b61828b/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
			<a href="https://github.com/Rahul-2314" target="_blank" rel="noreferrer">
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
	);
}

export default HeaderSocials