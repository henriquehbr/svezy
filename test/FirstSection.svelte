<script>
	export let bg
	export let align
</script>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		padding: 24px 48px;
		font-family: 'Open Sans';
	}
</style>

<section style="background-color: {bg}; align-items: {align}">
	<slot />
</section>
