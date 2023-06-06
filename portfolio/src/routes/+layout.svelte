<script>
	import Navigation from '../lib/components/Navigation.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Blob from '$lib/assets/Blob.svg';

	$: x = 400;
	$: y = 400;
	function handleMousemove(event) {
		x = event.pageX;
		y = event.pageY;
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Vibur&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section on:mousemove={handleMousemove}>
	<div id="blobs">
		<div id="blob1" style="top: {y}px; left: {x}px" />
		<div id="blob2" style="top: {y}px; left: {x}px" />
	</div>
	<Navigation />

	<slot />

	<Footer />
</section>

<style lang="scss">
	:global(*) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Plus Jakarta Sans', sans-serif;
		color: #202020;
	}
	:global(a) {
		text-decoration: none;
		color: black;
	}
	section {
		position: relative;
		overflow: hidden;
	}
	#blobs > div {
		position: absolute;
		z-index: -1;
		transform-origin: center;
		width: 600px;
		height: 600px;
		border-radius: 50%;
		filter: blur(300px);
		mix-blend-mode: darken;
		transition: all 0.2s ease-out;
		opacity: 0.4;
	}
	#blob1 {
		background: linear-gradient(180deg, #ffc7f3 0%, #ffee55 100%);
		transform: translate(-50%, -50%);
		animation: blob 15s infinite forwards;
		z-index: -1;
	}
	#blob2 {
		background: linear-gradient(180deg, #9aff35 0%, #58d7ff 100%);
		transform: translate(-50%, -50%);
		animation: blob 15s infinite reverse;
		z-index: -1;
	}

	@keyframes blob {
		0% {
			transform: translate(-50%, -50%);
		}
		10% {
			transform: translate(-20%, -30%);
		}
		20% {
			transform: translate(-50%, -20%);
		}
		30% {
			transform: translate(-60%, -70%);
		}
		50% {
			transform: translate(-40%, -50%);
		}
		60% {
			transform: translate(-30%, -40%);
		}
		70% {
			transform: translate(-50%, -30%);
		}
		80% {
			transform: translate(-70%, -40%);
		}
		90% {
			transform: translate(-40%, -60%);
		}
		100% {
			transform: translate(-50%, -50%);
		}
	}
</style>
