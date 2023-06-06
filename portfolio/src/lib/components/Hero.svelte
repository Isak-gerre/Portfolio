<script>
	import HeroImage from '$lib/assets/HeroIsak.svg';
	import Button from './Button.svelte';
</script>

<div id="hero_container">
	<div id="hero_text_container">
		<h1>Isak Gerre</h1>
		<h2>Frontend Developer</h2>
		<p>Crafting Engaging User Experiences with a love for developing with SvelteKit</p>
		<div id="hero_button">
			<Button bg="colorful" href="mailto:isak.gerre@gmail.com" />
		</div>
	</div>
	<div id="hero_image_container">
		<img src={HeroImage} alt="" />
	</div>
</div>

<style>
	#hero_container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		margin: 0rem auto 10rem auto;
		padding: 10rem;
		max-width: 1300px;
	}
	img {
		height: 400px;
	}
	#hero_text_container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
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
	#hero_button {
		position: relative;
		width: fit-content;
	}
	@media (min-width: 767px) and (max-width: 1023px) {
	}
	@media screen and (max-width: 767px) {
		#hero_container {
			margin: 0rem 2rem 2rem 2rem;
			grid-template-columns: repeat(2, 50%);
			padding: 0;
		}
		img {
			transform: scale(0.6);
		}
		h1 {
			font-weight: 800;
			font-size: 22px;
			line-height: 0px;
			letter-spacing: 0.03em;
			text-transform: uppercase;
		}
		h2 {
			font-weight: 600;
			font-size: 16px;
			line-height: 18px;
		}
		p {
			font-weight: 400;
			font-size: 15px;
			line-height: 18px;
		}
	}
</style>
