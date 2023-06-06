<script>
	import logo from '$lib/assets/IsakGerre.svg';
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
	<div id="menu">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/cv">About me</a></li>
			<li><a href="#projects_container">Projects</a></li>
			<li><a href="https://www.linkedin.com/in/isak-gerre-0754a5227/">LinkedIn</a></li>
			<li><a href="/">Let's Talk!👋🏼</a></li>
		</ul>
	</div>
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
</style>
