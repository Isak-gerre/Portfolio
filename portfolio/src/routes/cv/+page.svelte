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
		we: [
			{
				company: 'Sjöbergska Huset AB - Malmö',
				position: 'Internship',
				duration: 'January 2022 - June 2023',
				desc: "During my internship at Sjöbergska, I had the valuable opportunity to engage directly with customers under the guidance and mentorship of Jens Grip. This experience not only honed my interpersonal and customer service skills but also deepened my understanding of effective client communication. Moreover, I had the privilege of developing an application using SvelteKit and Firebase. This project allowed me to leverage my technical expertise while gaining hands-on experience in modern web development frameworks and cloud-based technologies. By working on this application, I enhanced my proficiency in building robust and user-friendly web solutions.In addition, I contributed to the enhancement and redesign of Björn Lomborg's website using Drupal. Furthermore, I took on the responsibility of organizing and facilitating workshops to define and refine our project objectives. Through these workshops, I demonstrated my leadership abilities, effective communication skills, and the capacity to collaborate and guide a team towards achieving shared goals."
			},
			{
				company: 'HIVE Malmö - Malmö',
				position: 'Project Manager and Web Developer',
				duration: 'June 2022 - Present',
				desc: "As a Project Manager and Lead Web Developer for HIVE Malmö, I have been actively involved in developing and driving forward the HIVE Malmö project, in collaboration with my peers. The project's mission is to establish a stronger connection between students and the business community, and I have played a key role in its success. My responsibilities include overseeing project activities, coordinating with team members, and managing web development tasks to ensure the project's objectives are met. Through HIVE Malmö, we aim to create a vibrant platform that bridges the gap between academia and industry."
			},
			{
				company: 'Malmö University - Malmö',
				position: 'Amanuens - Teacher assistant',
				duration: 'January 2021 - June 2021 & January 2022 - June 2022',
				desc: 'Throughout two semesters of my academic journey, I successfully secured the role of a teaching assistant for two distinct programming courses. In this esteemed position, I had the opportunity to deliver informative lectures on various programming concepts, assist students in resolving queries, and meticulously evaluate examinations. Additionally, I actively engaged in and taught two comprehensive day-long lectures on the fascinating realm of 3D animation within Blender.'
			},
			{
				company: 'Strandhuset - Helsingborg',
				position: 'Waiter/Server',
				duration: 'June 2022 - August 2022',
				desc: 'I worked as a waiter/server at Strandhuset in Helsingborg during the summer season. Strandhuset offered a menu featuring both Swedish home-cooked meals and Thai cuisine, served during both lunch and dinner hours. In this role, I provided attentive and friendly service to customers, took orders, delivered food and beverages, and ensured a positive dining experience. Working in a fast-paced environment, I developed excellent multitasking and communication skills, ensuring efficient service and customer satisfaction at all times.'
			},
			{
				company: 'McDonalds - Helsingborg',
				position: 'Guest Experience Leader',
				duration: 'October 2018 - October 2021',
				desc: "As a Guest Experience Leader at McDonald's Väla and Stattena, I worked across all areas of the restaurant, with a primary focus on customer service. This involved warmly greeting guests, taking their orders at the cash register, assembling orders, and serving meals to customers. As a Guest Experience Leader, my main objective was to ensure that guests received excellent service, with a particular emphasis on providing a positive experience for children. I took pride in creating a welcoming and friendly atmosphere, addressing guest needs promptly, and resolving any issues to their satisfaction."
			},
			{
				company: 'Dance Instructor - Helsingborg',
				position: 'Dance Instructor',
				duration: '2018 - Present',
				desc: 'As a dance instructor, I specialized in teaching Latin American and Standard dances. During my time in this role, I shared my passion for dance and helped students develop their skills and technique in these dance styles. I created lesson plans, led group classes, and provided individualized instruction to ensure that each student received personalized attention and guidance. Through my teaching, I aimed to inspire a love for dance and foster a supportive learning environment where students could improve their dancing abilities and express themselves creatively.'
			},
			{
				company: 'Publikvärd - Helsingborg',
				position: 'Event Usher',
				duration: '2016 - 2019',
				desc: 'As a part-time event usher, I worked at various events such as HX 2017, Rock of the 80s, Joe Labero, and Antikmässan in Helsingborg. In this role, I was responsible for ensuring a smooth and enjoyable experience for the guests. My duties included directing and assisting guests at the events, answering their questions, and acting as a coordinator during emergencies or unforeseen situations. Additionally, I was entrusted with the responsibility of being a group leader, overseeing the activities and tasks of a team of ushers. Through my role as an event usher, I developed strong interpersonal skills, problem-solving abilities, and the capacity to handle high-pressure situations effectively.'
			}
		],
		edu: [
			{
				company: 'Media Production and Process Design',
				position: 'Malmö University',
				duration: '2020-2023',
				desc: "Media Production and Process Design is a three-year bachelor's program focused on the development of web channels and media production. The program offers a wide range of knowledge and the opportunity to specialize in a chosen area. In the core part of the program, students learn to create their own web-based channels, including interactive and dynamic content, as well as produce original material for print, web, and mobile platforms. The program encompasses theoretical foundations in design, programming, management, marketing, and storytelling, which are applied in various aspects of media development, such as front-end development, advertising, and print production. Students gain practical skills in media production and are equipped with a comprehensive understanding of the media landscape."
			}
		],
		skills: [
			{
				title: 'Design',
				skills: [
					'Photography',
					'Figma',
					'Adobe Illustrator',
					'Adobe Photoshop',
					'Adobe Lightroom',
					'Adobe After Effects',
					'Adobe InDesign',
					'Adobe Premiere Pro',
					'Blender'
				]
			},
			{
				title: 'Development',
				skills: [
					'HTML',
					'CSS/SCSS',
					'JavaScript',
					'SvelteKit',
					'VSCode',
					'GitHub',
					'Git',
					'Insomnia',
					'Node.js',
					'Express',
					'PHP',
					'Firebase',
					'MongoDB'
				]
			},
			{
				title: 'Language',
				skills: [
					'Swedish - Mother tongue',
					'English - Fluent',
					'Danish - Good understanding',
					'German - Basic knowledge'
				]
			}
		],
		feats: [
			{
				title: 'Speaker at seminar about talent retention in Malmö',
				duration: 'March 2023',
				desc: 'In my role as the founder and project manager of HIVE Malmö, I had the privilege of gathering valuable experience and insights from both students and the workforce regarding the student-workforce relationship in the city of Malmö. This enriching journey led to a remarkable opportunity where I was graciously invited by Malmö Tillväxtkommisionen and Studentklåren Malmö to share my knowledge at a seminar focused on talent retention in Malmö.'
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

			<p><span class:workExp /> Work Experience</p>
			<p><span class:edu /> Education</p>
			<p><span class:skills /> Skills</p>
			<p><span class:feats /> Feats</p>
		</div>
	</div>
	<div id="moving">
		<div id="hero_container">
			<img src={Isak} alt="Me" />
			<p class="category">Work Experience</p>
			<div
				id="work_exp_container"
				use:inview={{ unobserveOnEnter: false, rootMargin: '-20%' }}
				on:change={({ detail }) => {
					workExp = detail.inView ? true : false;
				}}
			>
				{#each cv.we as work}
					<div class="item_container">
						<p class="company">{work.company}</p>
						<p class="position">{work.position} | {work.duration}</p>
						<p class="desc">{work.desc}</p>
					</div>
				{/each}
			</div>
			<p class="category">Education</p>
			<div
				id="edu_container"
				use:inview={{ unobserveOnEnter: false, rootMargin: '-20%' }}
				on:change={({ detail }) => {
					edu = detail.inView ? true : false;
				}}
			>
				{#each cv.edu as work}
					<div class="item_container">
						<p class="company">{work.company}</p>
						<p class="position">{work.position} | {work.duration}</p>
						<p class="desc">{work.desc}</p>
					</div>
				{/each}
			</div>
			<p class="category">Skills</p>
			<div
				class="skills_wrapper"
				use:inview={{ unobserveOnEnter: false, rootMargin: '-20%' }}
				on:change={({ detail }) => {
					skills = detail.inView ? true : false;
				}}
			>
				{#each cv.skills as skill}
					<div class="skills_container">
						<p class="company">{skill.title}</p>
						{#each skill.skills as item}
							<p class="item">{item}</p>
						{/each}
					</div>
				{/each}
			</div>
			<p class="category">Feats</p>
			<div
				id="feats_container"
				use:inview={{ unobserveOnEnter: false, rootMargin: '-20%' }}
				on:change={({ detail }) => {
					feats = detail.inView ? true : false;
				}}
			>
				{#each cv.feats as work}
					<div class="item_container">
						<p class="company">{work.title}</p>
						<p class="position">{work.duration}</p>
						<p class="desc">{work.desc}</p>
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
