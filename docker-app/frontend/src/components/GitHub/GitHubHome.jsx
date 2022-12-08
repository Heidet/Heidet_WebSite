import React, { useState } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../GlobalStyles/StylesReusable';
import { useDarkMode } from '../DarkMode';

const Home = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/profile/${username}`);
		setUsername("");
	};
	return (
		<ThemeProvider theme={themeMode}>
			<div className='home'>
				<form className='home__form' onSubmit={handleSubmit}>
					<FaGithubAlt className='githubIcon'/>
					<label class="lblUsernameGitHub" htmlFor='username'>Entrer votre nom github</label>
					<input
						value={username}
						class="usernameGitHub"
						onChange={(e) => setUsername(e.target.value)}
						name='username'
						id='username'
					/>
				</form>
			</div>
		</ThemeProvider>
	);
};

export default Home;
