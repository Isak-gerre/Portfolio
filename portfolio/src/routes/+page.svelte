<script>
	import { onMount } from 'svelte';
	import Hero from '../lib/components/Hero.svelte';
	import Projects from '../lib/components/Projects.svelte';
	import Banner from '../lib/components/Banner.svelte';
	import PostersAndPhotos from '../lib/components/PostersAndPhotos.svelte';
	import { fade } from 'svelte/transition';

	onMount(() => {
		scrollTo(0, 0);
	});
</script>

<main in:fade={{ duration: 500 }}>
	<Hero />
	<Banner type="skills" />
	<Projects />
	<Banner type="love" />
	<PostersAndPhotos />
</main>

<style>
	main {
		opacity: 0;
		animation: fade 1s forwards;
	}

	@keyframes fade {
		to {
			opacity: 1;
		}
	}
</style>
