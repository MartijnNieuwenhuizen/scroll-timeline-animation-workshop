<script>
	import Article from '$lib/Article/index.svelte';
</script>

<article>
	<header class="container">
		<h1>Assignment 4 - Shrink and move</h1>
	</header>
	<div class="scroll-container">
		<h2 class="big-number">500.000KG</h2>
	</div>

	<div class="container">
		<Article />
	</div>
</article>

<style lang="scss">
	// Some general article styling
	.container {
		max-width: 40rem;
		margin: 0 auto;
		padding: 8rem 2rem;
		text-align: justify;
		text-justify: inter-word;
	}
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 5rem;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	.big-number {
		font-size: 12rem;
		font-weight: 700;
		line-height: 1;
		margin: 0;
		text-align: center;
		color: #01cbe1;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.scroll-container {
		position: sticky;
		top: 0;
		right: 0;
		min-height: 20rem;
	}

	@keyframes move-number {
		from {
			font-size: 12rem;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		to {
			top: 1rem;
			right: 1rem;
			font-size: 3rem;
			transform: translate(0%, 0%);
		}
	}

	/* 
	 * Start here!
	 */
	.scroll-container {
		// 1. Add a view-timeline-name property
	}
	.big-number {
		// 2. Add the animation

		// 3. Add the animation-timeline property

		// 4. Define a animation-range that will trigger the animation on the correct moment
	}
</style>
