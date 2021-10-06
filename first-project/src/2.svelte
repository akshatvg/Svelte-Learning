<svelte:options tag="bundle-file" />

<script>
	import { count } from './stores-old.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	$: count_value=0;

	const unsubscribe = count.subscribe(value => {
		count_value = value;
	});
</script>

<h1>The count is {count_value}</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>