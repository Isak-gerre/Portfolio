<script>
	import HiveMalmo from '$lib/assets/HiveMalmo.png';
	import HiveBG from '$lib/assets/HiveBG.png';
	import Bingy from '$lib/assets/Bingy.png';
	import BingyBG from '$lib/assets/BingyBG.png';
	import Gameflix from '$lib/assets/Gameflix.png';
	import GameflixBG from '$lib/assets/GameflixBG.png';

	import Button from './Button.svelte';
	import Skill from './Skill.svelte';

	let projects = [
		{
			title: 'Gameflix.',
			href: 'https://gameflix-e4sd9jlp5-isak-gerre.vercel.app',
			internal_href: 'https://gameflix-e4sd9jlp5-isak-gerre.vercel.app',
			description: {
				short: 'Next.js project',
				long: 'I created a web application built using Next.js, designed to provide gamers with an immersive and seamless browsing experience for video games.'
			},
			skills_used: ['Next.js', 'Vercel', 'Figma', 'css'],
			img: Gameflix,
			bg: GameflixBG
		},
		{
			title: 'hivemalmo.se',
			href: 'https://hivemalmo.se',
			internal_href: 'https://hivemalmo.se',
			description: {
				short: 'Webpage for my startup',
				long: 'I created a dedicated webpage my start-up, HIVE Malmö, an organization run by students, for students. Recognizing the immense talent and potential among university students today, we at HIVE envision a future where the gap between media students and the industry in Malmö no longer exists. Our goal is to build strong bridges that bring together students and businesses, driving the industry forward collectively.'
			},
			skills_used: ['SvelteKit', 'Firebase', 'Figma', 'Firebase Hosting'],
			img: HiveMalmo,
			bg: HiveBG
		},
		{
			title: 'bingy.se',
			href: 'https://bingy.se',
			internal_href: 'https://bingy.se',
			description: {
				short: 'Movie Browsing App',
				long: 'I developed a dynamic web application that allows users to browse and create personalized lists of movies. The project aims to enhance the movie-watching experience by providing a convenient platform to discover new films and curate customized lists for future reference.'
			},
			skills_used: ['PHP', 'API', 'Figma', 'JavaScript', 'CSS/SCSS'],
			img: Bingy,
			bg: BingyBG
		}
	];

	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInView;
</script>

<section
	id="projects_container"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	<h4>Projects</h4>
	{#if isInView}
		{#each projects as project}
			<div
				id="project_container"
				style="background-image: url('{project.bg}');"
				in:fly={{ y: 100, duration: 1000 }}
			>
				<div id="project_text_container">
					<p class="desc_short">{project.description.short}</p>
					<a class="title" href={project.internal_href} traget="_blank">
						{project.title}
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12.5 1.5C12.5 0.947715 12.0523 0.5 11.5 0.5L2.5 0.5C1.94772 0.499999 1.5 0.947715 1.5 1.5C1.5 2.05228 1.94772 2.5 2.5 2.5H10.5V10.5C10.5 11.0523 10.9477 11.5 11.5 11.5C12.0523 11.5 12.5 11.0523 12.5 10.5L12.5 1.5ZM2.20711 12.2071L12.2071 2.20711L10.7929 0.792893L0.792893 10.7929L2.20711 12.2071Z"
								fill="black"
							/>
						</svg>
					</a>
					<p class="desc_long">{project.description.long}</p>
					<p class="skills_used">Skills used</p>
					<div id="skills_container">
						{#each project.skills_used as skill}
							<Skill text={skill} />
						{/each}
					</div>
				</div>
				<div id="project_image_container">
					<img src={project.img} alt="" />
				</div>
			</div>
		{/each}
		<div id="read_cv">
			<div id="read_cv_text">
				<p>Want to know more about my <span id="colorful">work experience</span>?</p>
			</div>
			<div id="read_cv_button">
				<Button text="Read my CV" bg="colorful" />
			</div>
		</div>
	{/if}
</section>

<style>
	h4 {
		text-align: end;
		font-weight: 700;
		font-size: 32px;
		line-height: 40px;
	}
	#projects_container {
		padding: 10rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		margin: 0 auto;
		max-width: 1400px;
	}
	#project_container {
		position: relative;
		border-radius: 10px;
		display: grid;
		grid-template-columns: repeat(2, 50%);
		background-position: center;
		background-size: cover;
		transition: all 0.3s ease-out;
	}
	#project_container:hover {
		box-shadow: 0px 0px 20px 4px #0000001e;
	}
	#project_text_container {
		display: flex;
		flex-direction: column;
		justify-content: end;
		gap: 1rem;
		padding: 3rem;
	}
	#skills_container {
		display: flex;
		flex-direction: row;
		gap: 5px;
	}
	.title {
		font-weight: 700;
		font-size: 28px;
		line-height: 40px;
	}
	.desc_short {
		font-weight: 400;
		font-size: 16px;
		line-height: 25px;
	}
	.desc_long {
		font-weight: 500;
		font-size: 14px;
		line-height: 150%;
	}
	#project_container:hover img {
		transform: scale(1.02);
	}
	img {
		width: 80%;
		transition: all 0.3s ease-out;
	}
	#read_cv {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
	#read_cv_text {
		font-weight: 800;
		font-size: 3em;
		text-align: center;
		max-width: 24ch;
	}
	#colorful {
		background: linear-gradient(89.89deg, #ffd027 31.98%, #78d291 51.14%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
	svg {
		margin-left: 4px;
	}
	#project_image_container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem 0;
	}
	@media (min-width: 767px) and (max-width: 1023px) {
		#projects_container {
			padding: 4rem;
		}
		img {
			width: 90%;
		}
		#project_container:hover img {
			transform: scale(1.02);
		}
	}
	@media screen and (max-width: 767px) {
		h4 {
			font-size: 18px;
		}
		#projects_container {
			padding: 2rem;
		}
		#project_container {
			grid-template-columns: 100%;
			grid-template-rows: repeat(2, 50%);
		}
		#project_text_container {
			grid-row: 2/3;
			padding: 1rem;
			width: 100%;
		}
		img {
			transform: scale(1);
			width: 100%;
			padding: 1rem;
		}
		#project_container:hover img {
			transform: scale(1) translate(0%, 0%);
		}
		.title {
			font-weight: 700;
			font-size: 22px;
			line-height: 20px;
		}
		.desc_short {
			font-weight: 400;
			font-size: 14px;
			line-height: 15px;
		}
		.desc_long {
			font-weight: 400;
			font-size: 12px;
			line-height: 150%;
		}
		#read_cv_text {
			font-size: 2em;
		}
	}
</style>
