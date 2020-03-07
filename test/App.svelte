<script>
	import Svezy from '../Svezy'
	import Button from './Button'
</script>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		font-family: 'Arial';
		background: white;
		color: white;
	}
</style>

<Svezy loader={() => import('./FirstSection')} bg="#484848" align="flex-start">
	<h1>Watch just how the sections...</h1>
	<Button>Next</Button>
</Svezy>

<Svezy loader={() => import('./SecondSection')} bg="#323232" align="center">
	<h1>Will be dynamically loaded...</h1>
	<Button>Next again</Button>
</Svezy>

<Svezy loader={() => import('./ThirdSection')} bg="#161616" align="flex-end">
	<h1>As you scroll</h1>
</Svezy>
