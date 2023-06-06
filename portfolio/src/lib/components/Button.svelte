<script>
	export let text = "Let's Talk!👋🏼";
	export let href = '/cv';
	export let target = '';
	export let bg;
</script>

<div id="button_with_background">
	<div id="button" class={bg}>
		<a {href} {target}>{text}</a>
	</div>
</div>

<style>
	#button_with_background {
		position: relative;
	}
	#button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 1rem 2rem;
		gap: 10px;

		background: #202020;
		border: 2px solid #202020;
		border-radius: 38px;
		width: fit-content;
		cursor: pointer;
	}
	#button:hover > a {
		transform: scale(1.05);
		z-index: 1;
	}
	#button:hover {
		background: #202020ee;
	}
	.colorful:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: linear-gradient(90deg, #6c8dff -2.98%, #a3ffa2 36.18%, #fbff31 64.6%, #ff6d6d 100%);
		filter: blur(20px);
		border-radius: 10px;
	}
	#button > a {
		color: white;
		width: fit-content;
		transition: all 0.3s ease-out;
	}
	@media (min-width: 767px) and (max-width: 1023px) {
	}
	@media screen and (max-width: 767px) {
		a {
			font-size: 11px;
		}
		#button {
			padding: 0.5rem 1rem;
		}
	}
</style>
