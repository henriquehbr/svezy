<script>
	let btn

	const nextSection = () => {
		const nextSection = btn.parentNode.nextElementSibling
		nextSection.scrollIntoView({ behavior: 'smooth' })
	}
</script>

<button bind:this={btn} on:click={nextSection}>
	<slot />
</button>
