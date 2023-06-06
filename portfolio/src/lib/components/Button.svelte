<script>
	export let text = "Let's Talk!👋🏼";
	export let bg;
</script>

<div id="button_with_background">
	<div id="button" class={bg}>
		<p>{text}</p>
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
	#button:hover > p {
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
	#button > p {
		color: white;
		width: fit-content;
		transition: all 0.3s ease-out;
	}
</style>
