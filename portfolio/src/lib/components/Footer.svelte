<script>
	import Navigation from './Navigation.svelte';
	import Button from './Button.svelte';
</script>

<footer id="footer">
	<div id="footer_hero">
		<div id="footer_hero_text">
			<p>Available for <span id="colorful">work</span>, don't hesitate to write me an email!</p>
		</div>
		<div id="footer_hero_button">
			<Button bg="colorful" href="mailto:isak.gerre@gmail.com" />
		</div>
	</div>
	<Navigation />
	<div id="copyright_container">
		<p>© Copyright 2023, All Rights Reserved by Isak Gerre.</p>
	</div>
</footer>

<style lang="scss">
	footer {
		margin-top: 6rem;
	}
	#footer_hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
	#footer_hero_text {
		font-weight: 800;
		font-size: 3em;
		text-align: center;
		max-width: 30ch;
	}
	#colorful {
		background: linear-gradient(89.89deg, #ffd027 31.98%, #78d291 51.14%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}

	#copyright_container {
		border-top: 1px solid #202020;
		margin: 0 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
	#copyright_container > p {
		margin: 2rem;
	}
	@media (min-width: 767px) and (max-width: 1023px) {
	}
	@media screen and (max-width: 767px) {
		#copyright_container > p {
			font-size: 0.7rem;
		}
		#footer_hero_text {
			font-size: 2em;
			padding: 2rem;
		}
	}
</style>
