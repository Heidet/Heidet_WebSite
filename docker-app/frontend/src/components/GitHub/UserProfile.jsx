import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCircleFill, BsFillStarFill } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../GlobalStyles/StylesReusable';
import { useDarkMode } from '../DarkMode';
import Header from "./Header";
import styled from "styled-components";
import langColors from "../../utils/langColors";
import { BarChart, DonutChart, Card, Title } from "@tremor/react";
import {
	fetchMostStarredRepos,
	fetchRepos,
	fetchStarsPerLang,
	fetchTopLanguages,
} from "../../utils/requests";


export default function UserProfile () {
	const [ userName, setUserName] = useState(process.env.REACT_APP_USER);
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [userData, setUserData] = useState([]);
	const [error, setError] = useState(false);
	const [repos, setRepos] = useState([]);
	const [mostStarred, setMostStarred] = useState([]);
	const [starsPerLanguageArray, setStarsPerLanguageArray] = useState([]);
	const [topLanguages, setTopLanguages] = useState([]);

	useEffect(() => {
		function fetchGitHubUser() {
			fetch(`https://api.github.com/users/${userName}`)
				.then((res) => res.json())
				.then((data) => {
					if (data.message) {
						setError(true);
						setLoading(false);
					} else {
						setUserData(data);
						setLoading(false);
					}
				})
				.catch((err) => {
					setError(true);
					setLoading(false);
					console.error(err);
				});
		}
		fetchGitHubUser();
	}, [userName]);

	useEffect(() => {
		function authenticate() {
			if (!error) {
				fetchMostStarredRepos(userName, setMostStarred);
				fetchRepos(userName, setRepos);
				fetchStarsPerLang(userName, setStarsPerLanguageArray);
				fetchTopLanguages(userName, setTopLanguages);
			}
		}
		authenticate();
	}, [userName, error]);

	if (loading) {
		return <div className='loading'>Chargement...</div>;
	}
	if (error) {
		return navigate("/error");
	}
	return (
		<ThemeProvider theme={themeMode}>
			<Profil>
				<Header data={userData} />
				<main className='main' style={{ padding: "30px" }}>
					<div className='card__container'>
						<Card>
							<Title>Top Langages</Title>
							<DonutChart
								data={topLanguages}
								category='count'
								variant='pie'
								dataKey='lang'
								marginTop='mt-6'
								colors={["yellow", "blue", "red", "blue"]}
							/>
						</Card>
						<Card>
							<Title>Le plus like</Title>
							<BarChart
								data={mostStarred}
								dataKey='name'
								categories={["stars"]}
								colors={["blue"]}
								marginTop='mt-6'
								yAxisWidth='w-6'
							/>
						</Card>
						<Card>
							<Title>Like par Langage</Title>
							<DonutChart
								data={starsPerLanguageArray}
								category='stars'
								dataKey='lang'
								marginTop='mt-6'
								colors={["yellow", "blue", "red", "blue"]}
							/>
						</Card>
					</div>

					<div className='second__main'>
						<h2>Repositories</h2>
						<div className='repos__container'>
							{repos.map((repo) => (
								<div className='repo' key={repo.id}>
									<h3 id='repo__name'>{repo.name}</h3>
									<p id='repo__description'>{repo.description}</p>
									<div className='repo__icons'>
										<div>
											<BsCircleFill color={langColors[repo.language]} />
											<p>{repo.language || "Unknown"}</p>
										</div>
										<div>
											<BsFillStarFill />
											<p>{repo.stargazers_count}</p>
										</div>
										<div>
											<BiGitRepoForked />
											<p>{repo.size} KB</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</main>
			</Profil>
		</ThemeProvider>
	);
};


const Profil = styled.div`
	.main {
		background-color: ${({ theme }) => theme.bg};
		color: ${({ theme }) => theme.text};
	}
	.tremor-base {
		background-color: ${({ theme }) => theme.bg};
		color: ${({ theme }) => theme.text};
	}
	input {
		padding: 20px;
		background-color: #3a5ba0;
		border: none;
		border-radius: 5px;
		outline: none;
		width: 50%;
		color: #fff;
	}
	label {
		color: #fff;
		font-size: 36px;
	}
	a {
		text-decoration: none;
		color: #ddd;
	}
	.card__container,
	.repos__container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin: 30px 0px;
	}
	.card__container > div {
		height: 400px;
		width: 30%;
		margin: 10px;
		padding: 20px;
	}
	.repo {
		box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.15);
		width: 350px;
		min-height: 200px;
		margin: 15px;
		padding: 20px;
		position: relative;
	}
	#repo__name,
	#repo__description {
		margin-bottom: 20px;
	}
	.repo__icons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		position: absolute;
		bottom: 20px;
	}
	.repo__icons div {
		display: flex;
		align-items: baseline;
	}
	.repo__icons div > p {
		font-size: 12px;
		margin-left: 5px;
	}
	footer {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 30vh;
	}
	.errorContainer {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #21325e;
	}
	.errorContainer h2 {
		margin-bottom: 30px;
	}
	@media screen and (max-width: 768px) {
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