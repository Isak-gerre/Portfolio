<script>
	import Isak from '$lib/assets/Isak.png';
	import { fade } from 'svelte/transition';

	import { inview } from 'svelte-inview';

	let workExp;
	let edu;
	let skills;
	let feats;
	let y = 0;

	let cv = {
		aboutMe: [
			{
				desc: [
					`Hello! I’m a web developer with a strong passion for creating functional, user-friendly applications. My expertise lies in Next.js, TypeScript, and Material-UI, and I also have hands-on experience with AWS and SST. I enjoy working on projects where I can merge problem-solving with clean, user-focused design to deliver impactful solutions.`,
					`Currently, I’m a developer at IFSEK, contributing to Solkoll, a platform that helps solar panel installers ensure high-quality installations for their customers. This project has been especially rewarding as it combines my technical skills with a mission to support a more sustainable future. My role spans front-end development, UI/UX design, and even some back-end work, which keeps each day both engaging and challenging.`,
					`I thrive on digging into the details and finding the best solutions to complex problems. Whether it’s debugging a tricky issue, optimizing a process, or brainstorming innovative features, I enjoy the variety that comes with development. Seeing a project come to life and knowing it creates value for users is what drives me.`,
					`Outside of work, I love spending time with my daughter, dancing and competing in bugg. I’m also passionate about exploring new hobbies, gaming, enjoying great movies, and diving into music. Staying curious and maintaining a balanced life helps me bring fresh energy and perspective to everything I do.`
				]
			}
		],
		myUnusualHobbies: [
			{
				desc: [
					`Outside of coding, I have a variety of hobbies that fuel my creativity and help me stay balanced. One of my long-standing passions is dancing and competing in bugg, a Swedish dance style that is full of energy and precision. It’s a dynamic, fast-paced dance that requires focus, coordination, and a sense of rhythm, and I love the challenge of mastering new moves and competing with others who share the same passion. It’s a fun way to stay active while connecting with people outside of the tech world.`,
					`I also have a growing interest in flying FPV drones, which is my newest hobby. There’s something incredibly exciting about the combination of piloting and filming, and I’m still learning the ins and outs of the craft. The freedom of flying through the air and capturing unique perspectives is both exhilarating and challenging. I’m excited to continue improving my skills, exploring new locations, and sharing my experiences through the lens of these high-tech drones.`,
					`In addition to these activities, I’m also enjoy making rugs with a tufting gun, a creative and hands-on process that allows me to design intricate patterns and bring them to life with yarn. It’s a satisfying mix of artistry and craftsmanship, and I love how tangible the outcome is. Each rug is a piece of art that I can be proud of, and it’s an excellent way for me to unwind while still engaging my creative side.`,
					`I also enjoy dabbling in 3D modeling, which is another way for me to express my creativity and push the boundaries of what’s possible. Whether I’m modeling something for fun or learning new techniques, this hobby gives me a chance to experiment and think outside the box. I often find that the problem-solving skills I develop through 3D modeling overlap with my work as a developer, so it’s both a hobby and a way to enhance my professional skills.`,
					`Each of these hobbies allows me to tap into different creative outlets and keeps me energized and inspired. They provide a balance to my work and help me maintain a fresh perspective in everything I do.`
				]
			}
		],
		myFavoriteThings: [
			{
				desc: [
					`Warm veggie tacos with toppings so yummy,`,
					`Laughing with friends till it aches in my tummy,`,
					`Spinning with joy as my daughter she sings,`,
					`These are a few of my favorite things.`,
					`Late-night gaming with snacks by my side,`,
					`Dancing in kitchens where fun can’t subside,`,
					`Hunting for hobbies that give my heart wings,`,
					`These are a few of my favorite things.`,
					`When the chores call,`,
					`When the mood falls,`,
					`When I’m feeling sad,`,
					`I simply remember my favorite things,`,
					`And then I don’t feel so bad! 🎶`
				]
			}
		]
	};
</script>

<svelte:window bind:scrollY={y} />
<section in:fade={{ duration: 500 }}>
	<div id="static">
		<div id="hero_text_container" class:scrolled={y > 50 ? true : false}>
			<h1>Isak Gerre</h1>
			<h2>Frontend Developer</h2>

			<p><span class:workExp />About me</p>
			<p><span class:edu />My unusual hobbies</p>
			<p><span class:skills />My favorite things</p>
		</div>
	</div>
	<div id="moving">
		<div id="hero_container">
			<img src={Isak} alt="Me" />
			<p class="category">About me</p>
			<div
				id="work_exp_container"
				use:inview={{ unobserveOnEnter: false, rootMargin: '-20%' }}
				on:change={({ detail }) => {
					workExp = detail.inView ? true : false;
				}}
			>
				{#each cv.aboutMe as work}
					<div class="item_container">
						{#each work.desc as item}
							<p class="desc">{item}</p>
						{/each}
					</div>
				{/each}
			</div>
			<p class="category">My unusual hobbies</p>
			<div
				id="edu_container"
				use:inview={{ unobserveOnEnter: false, rootMargin: '-20%' }}
				on:change={({ detail }) => {
					edu = detail.inView ? true : false;
				}}
			>
				{#each cv.myUnusualHobbies as work}
					<div class="item_container">
						{#each work.desc as item}
							<p class="desc">{item}</p>
						{/each}
					</div>
				{/each}
			</div>
			<p class="category">My favorite things</p>
			<div
				class="edu_container"
				use:inview={{ unobserveOnEnter: false, rootMargin: '-20%' }}
				on:change={({ detail }) => {
					skills = detail.inView ? true : false;
				}}
			>
				{#each cv.myFavoriteThings as skill}
					<div class="item_container">
						{#each skill.desc as item}
							<p class="desc">{item}</p>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(2, 50%);
		padding: 0 10rem;
	}
	#static {
	}
	img {
		width: 100%;
	}
	#hero_text_container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: fit-content;
		position: fixed;
		top: 25%;
		transition: all 0.3s ease-out;
	}
	.scrolled {
		top: 15% !important;
	}
	h1 {
		font-weight: 800;
		font-size: 48px;
		line-height: 60px;
		letter-spacing: 0.03em;
		text-transform: uppercase;
	}
	h2 {
		font-weight: 600;
		font-size: 48px;
		line-height: 60px;
	}
	p {
		font-weight: 400;
		font-size: 20px;
		line-height: 25px;
	}
	.item_container,
	.skills_wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 2rem 0;
	}
	.category {
		font-weight: 700;
		font-size: 23.5156px;
		line-height: 176%;
	}
	.company {
		font-weight: 700;
		font-size: 16px;
		line-height: 176%;
		letter-spacing: 0.03em;
	}
	.position {
		font-weight: 400;
		font-size: 16px;
		line-height: 176%;
		letter-spacing: 0.03em;

		color: #70706f;
	}
	.desc,
	.item {
		font-weight: 400;
		font-size: 16px;
		line-height: 176%;

		letter-spacing: 0.03em;
	}
	.skills_wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	.skills_container {
		display: grid;
	}
	#hero_text_container > p {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	span {
		display: block;
		height: 2px;
		width: 15px;
		margin: 0 1rem 0 0;
		background-color: black;
		transition: all 0.2s ease-out;
	}
	.workExp,
	.edu,
	.skills,
	.feats {
		width: 30px;
	}
	@media (min-width: 767px) and (max-width: 1289px) {
		section {
			grid-template-columns: 100%;
			padding: 0 2rem;
			gap: 3rem;
		}
		#hero_text_container {
			height: fit-content;
			position: relative;
			top: 0;
		}
		#static {
			height: fit-content;
		}
		.scrolled {
			top: 0% !important;
		}
		img {
			position: absolute;
			width: 400px;
			top: 4%;
			right: 5%;
		}
	}
	@media screen and (max-width: 767px) {
		section {
			grid-template-columns: 100%;
			grid-template-rows: repeat(2);
			padding: 0 2rem;
		}
		#hero_text_container {
			height: fit-content;
			position: relative;
			top: 0;
		}
		#static {
			height: fit-content;
		}
		.scrolled {
			top: 0% !important;
		}
		h1 {
			font-weight: 800;
			font-size: 36px;
			line-height: 30px;
			letter-spacing: 0.03em;
			text-transform: uppercase;
		}
		h2 {
			font-weight: 600;
			font-size: 24px;
			line-height: 24px;
		}
		p {
			font-weight: 400;
			font-size: 18px;
			line-height: 25px;
		}
		.company {
			font-weight: 700;
			font-size: 14px;
			line-height: 176%;
			letter-spacing: 0.03em;
		}
		.position {
			font-weight: 400;
			font-size: 14px;
			line-height: 176%;
			letter-spacing: 0.03em;

			color: #70706f;
		}
		.desc,
		.item {
			font-weight: 400;
			font-size: 12px;
			line-height: 176%;

			letter-spacing: 0.03em;
		}
	}
</style>
