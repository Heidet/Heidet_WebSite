import React from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { ThemeProvider } from 'styled-components';
import { BsGithub } from "react-icons/bs";
import { darkTheme, lightTheme } from '../GlobalStyles/StylesReusable';
import { useDarkMode } from '../DarkMode';


export default function Header({ data }) {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	const splitDate = (date) => {
		const array = date.split("-");
		const months = {
			Janauary: "01",
			February: "02",
			March: "03",
			April: "04",
			May: "05",
			June: "06",
			July: "07",
			August: "08",
			September: "09",
			October: "10",
			November: "11",
			December: "12",
		};
		const day = array[2].substring(0, 2);
		const month = Object.keys(months).find((key) => months[key] === array[1]);
		const year = array[0];
		return `Joined ${month} ${day}, ${year}`;
	};

	return (
		<ThemeProvider theme={themeMode}>
			<ProfilHeader>
				<div className='profile__header' >
					<div className='profile__nav'>
						<h2>Statistique GitHub</h2>
					</div>
					
					<div className='profile___section'>
						<img src={data.avatar_url} alt={data.name} className='profile__image' />
						<h1>{data.name}</h1>
						<a
							href={`https://github.com/${data.login}`}
							alt={data.name}
							className='profile__url'
							target='_blank'
							rel='noreferrer'
						>
							<BsGithub /> 
						</a>
						<div className='profile__info'>
							<div style={{ display: "flex", marginRight: "30px", color: "#ddd" }}>
								<IoLocationSharp />
								<p>{data.location}</p>
							</div>

							<div style={{ display: "flex", color: "#ddd" }}>
								<FaCalendarAlt style={{ marginRight: "5px" }} />
								<p>{splitDate(data.created_at)}</p>
							</div>
						</div>
						<div className='profile__details'>
							<div>
								<p className='profile__text'>{data.public_repos}</p>
								<p style={{ color: theme.text }}>Repositories</p>
							</div>
							<div>
								<p className='profile__text'>{data.followers}</p>
								<p style={{ color: theme.text }}>Followers</p>
							</div>
							<div>
								<p className='profile__text'>{data.following}</p>
								<p style={{ color: theme.text }}>Following</p>
							</div>
						</div>
					</div>
				</div>
			</ProfilHeader>
		</ThemeProvider>
	);
};


const ProfilHeader = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
	* {
		box-sizing: border-box;
		font-family: "Space Grotesk", sans-serif;
	}
	a {
		text-decoration: none;
		color: #ddd;
	}

	.profile__header {
		width: 100%;
		background-color: ${({ theme }) => theme.github_bg};
		padding-bottom: 40px;
	}
	.profile__nav {
		padding: 20px;
		display: flex;
	}
	.profile__nav h2 {
		color: ${({ theme }) => theme.github_profile__details};
	}
	.loading {
		height: 100vh;
		background-color: ${({ theme }) => theme.github_bg};
		color: #fff;
	}
	.loading,
	.profile___section {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.profile__image {
		border: 10px solid ${({ theme }) => theme.github_image_border};
		border-radius: 50%;
		width: 150px;
		object-fit: contain;
		margin-bottom: 20px;
	}
	.profile___section > h1 {
		color: #fff;
		margin-bottom: 10px;
	}
	.profile__url {
		color: ${({ theme }) => theme.github_image_border};
		font-size: 40px;
	}
	.profile__url:hover,
	.errorContainer > a:hover {
		text-decoration: underline;
	}
	.profile__info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 15px;
	}
	.profile__details {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	}
	.profile__details {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	}
	.profile__details div > p {
		color : ${({ theme }) => theme.text};
	}
	.profile__details div {
		background-color: ${({ theme }) => theme.bg};
		padding: 20px;
		margin: 10px;
		text-align: center;
		border-radius: 5px;
		width: 150px;
	}
	.profile__text {
		color: ${({ theme }) => theme.text};
		font-size: 26px;
	}

	@media screen and (max-width: 768px) {
		.home__form {
			padding: 20px;
		}
		label {
			font-size: 22px;
		}
		input,
		.card__container > div {
			width: 100%;
		}
		.profile__text {
			font-size: 16px;
		}
		.profile__details div {
			width: auto;
		}
	}
`