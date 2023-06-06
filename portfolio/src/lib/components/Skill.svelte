<script>
	export let text = 'SvelteKit';
</script>

<div id="button_with_background">
	<div id="skill">
		<p>{text}</p>
	</div>
</div>

<style>
	#button_with_background {
		position: relative;
	}
	#skill {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0.3rem 0.8rem;
		border: 2px solid #202020;
		border-radius: 38px;
		width: fit-content;
	}
	#skill > p {
		color: #202020;
		width: fit-content;
		transition: all 0.3s ease-out;
		font-size: 13px;
		white-space: nowrap;
	}
	@media (min-width: 767px) and (max-width: 1023px) {
	}
	@media screen and (max-width: 767px) {
		p {
			font-size: 9px;
		}
		#skill {
			padding: 0.5rem 1rem;
		}
	}
</style>
