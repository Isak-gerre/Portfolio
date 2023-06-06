<script>
	import logo from '$lib/assets/IsakGerre.svg';
	import MediaQuery from 'svelte-media-queries';
	import Hamburger from './Hamburger.svelte';

	let matches;

	let open;
</script>

<nav id="navigation">
	<div id="logo_container">
		<div id="logo_img">
			<img src={logo} alt="Emoji of me" />
		</div>
		<div id="logo_text">
			<p>Isak Gerre.</p>
			<p id="logo_description">Frontend developer</p>
		</div>
	</div>
	<MediaQuery query="(min-width: 767px)" let:matches>
		{#if matches}
			<div id="menu">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/cv">About me</a></li>
					<li>
						<a
							href="https://www.linkedin.com/in/isak-gerre-0754a5227/"
							target="
						">LinkedIn</a
						>
					</li>
					<li><a href="mailto:isak.gerre@gmail.com">Let's Talk!👋🏼</a></li>
				</ul>
			</div>
		{:else}
			<Hamburger bind:open on:click={() => (open = !open)} />
			<aside class:open>
				<div id="mobile">
					<a href="/" on:click={() => (open = !open)}>Home</a>
					<a href="/cv" on:click={() => (open = !open)}>About Me</a>
					<a
						href="https://www.linkedin.com/in/isak-gerre-0754a5227/"
						on:click={() => (open = !open)}>LinkedIn</a
					>
					<a href="mailto:isak.gerre@gmail.com" on:click={() => (open = !open)}>Let's Talk!👋🏼</a>
				</div>
			</aside>
			<div id="backdrop" class:open />
		{/if}
	</MediaQuery>
</nav>

<style lang="scss">
	#navigation {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		padding: 1rem 3rem;
	}
	#logo_container {
		display: grid;
		grid-template-columns: 141px 1fr;
	}
	#logo_text {
		display: flex;
		justify-content: center;
		flex-direction: column;
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 25px;
	}
	#logo_description {
		font-size: 18px;
		text-transform: uppercase;
		opacity: 0.6;
	}
	ul {
		list-style: none;
		display: flex;
		justify-content: space-evenly;
		flex-direction: row;
		gap: 2rem;
	}
	li {
		font-style: normal;
		font-weight: 700;
		font-size: 0.9rem;
	}
	@media (min-width: 767px) and (max-width: 1023px) {
	}
	@media screen and (max-width: 767px) {
		#logo_container {
			transform: scale(0.6);
		}
		#navigation {
			display: grid;
			grid-template-columns: repeat(2, 50%);
			padding: 0;
		}
		aside {
			position: fixed;
			right: -100%;
			transition: right 0.4s ease-in-out;
			height: 100vh;
			display: flex;
			flex-direction: column;
			background: #1a1a1a;
			top: 0;
			z-index: 10;
			width: 50vw;
		}

		.open {
			right: 0;
		}
		#mobile {
			display: flex;
			flex-direction: column;
			padding: 50px 0px;
		}
		#mobile > a {
			margin: 40px 0px;
			padding: 0 30px;
			color: white;
		}
		#backdrop.open {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			z-index: -1;
			transition: all 0.4s ease-in;
		}
		#backdrop.open {
			background-color: rgba(0, 0, 0, 0.7);
			z-index: 1;
		}
	}
</style>
