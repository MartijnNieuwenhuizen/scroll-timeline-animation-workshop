<script>
	import Article from '$lib/Article/index.svelte';
</script>

<header>
	<!-- Progress bar -->
	<div class="progress-bar"></div>

	<h1>Assignment 1 - Progress indicator</h1>
</header>
<article>
	<Article />
	<Article />
</article>

<style lang="scss">
	article,
	h1 {
		max-width: 700px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	@keyframes progress-bar {
		to {
			transform: scaleX(1);
		}
	}
	.progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 1rem;
		background-color: #ebdbff;
		transform-origin: left;
		transform: scaleX(0);
	}

	/* 
     * Start here!
     */
	.progress-bar {
		// 1. Add an animation with the name progress-bar and a linear timing function.

		// 2. Add a animation-timeline property with the value --page-scroll.
	}
</style>
