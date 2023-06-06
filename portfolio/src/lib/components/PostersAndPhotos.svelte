<script>
	import WhyBother from '$lib/assets/WhyBother.png';
	import Special from '$lib/assets/special.png';
	import Christo from '$lib/assets/Christo.png';
	import Flowers from '$lib/assets/flowers.png';
	import IMG_8386 from '$lib/assets/IMG_8386.png';
	import IMG_8385 from '$lib/assets/IMG_8385.png';
	import IMG_8384 from '$lib/assets/IMG_8384.png';

	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let isInViewPosters;
	let isInViewPhotos;
</script>

<div id="read_cv">
	<div id="read_cv_text">
		<p>I love to be <span id="colorful">creative</span> with photography and graphic design</p>
	</div>

	<div
		id="posters"
		use:inview={{ unobserveOnEnter: true, rootMargin: '-10%' }}
		on:change={({ detail }) => {
			isInViewPosters = detail.inView;
		}}
	>
		{#if isInViewPosters}
			<h4 in:fly={{ y: 100, duration: 1000 }}>Posters</h4>
			<div id="poster_container" in:fly={{ y: 100, duration: 1000 }}>
				<img src={Christo} alt="" />
				<img src={Flowers} alt="" />
				<img src={Special} alt="" />
				<img src={WhyBother} alt="" />
			</div>
		{/if}
	</div>
	<div
		id="photos"
		use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
		on:change={({ detail }) => {
			isInViewPhotos = detail.inView;
		}}
	>
		{#if isInViewPhotos}
			<h4 in:fly={{ y: 100, duration: 1000 }}>Photos</h4>
			<div id="photo_container" in:fly={{ y: 100, duration: 1000 }}>
				<img src={IMG_8384} alt="" />
				<img src={IMG_8386} alt="" />
				<img src={IMG_8385} alt="" />
			</div>
		{/if}
	</div>
</div>

<style>
	#read_cv {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5rem;
		padding: 10rem;
	}
	#read_cv_text {
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
		font-family: 'Vibur', cursive;
		font-size: 66px;
	}
	h4 {
		text-align: end;
		font-weight: 700;
		font-size: 28px;
		line-height: 40px;
		margin: 2rem 0;
		transition: all 0.5s;
	}
	#poster_container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}
	#photo_container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
	img {
		width: 100%;
	}
</style>
