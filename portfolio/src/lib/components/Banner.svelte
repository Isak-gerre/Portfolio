<script>
	export let type;

	let bannerText = {
		skills: [
			'SvelteKit',
			'JavaScript',
			'TypeScript',
			'Next.js',
			'AWS',
			'Figma',
			'SST',
			'Vercel',
			'React',
			'HTML',
			'CSS/SCSS',
			'Node.js',
			'Express',
			'REST APIs',
			'PHP',
			'Firebase',
			'MongoDB'
		],
		love: ['Photgraphy', 'Graphic Design', 'Music', 'Gaming', 'Pizza', 'Animals']
	};
</script>

<div id="banner">
	<div id="text_container">
		<p>*</p>
		{#each bannerText[type] as text}
			<p class="text">{text}</p>
			<p>*</p>
		{/each}
	</div>
</div>

<style>
	#banner {
		border-top: 3px solid #020202;
		border-bottom: 3px solid #020202;
	}
	#text_container {
		display: flex;
		flex-direction: row;
		animation: scroll 40s linear infinite;
		width: max-content;
	}
	p {
		font-weight: 800;
		font-size: 100px;
		height: 100px;
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
	}
	.text {
		transition: all 0.2s ease-out;
	}
	.text:hover {
		color: red;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0%);
		}
		50% {
			transform: translateX(calc(-100% + 100vw));
		}
		100% {
			transform: translateX(0%);
		}
	}
	@media (min-width: 767px) and (max-width: 1023px) {
	}
	@media screen and (max-width: 767px) {
		p {
			font-size: 50px;
			height: 50px;
		}
	}
</style>
