<svelte:options tag="bundle-file-stores" />

<script>
	import { count } from './stores-old.js';

	function reset() {
		count.set(0);
	}
</script>

<button on:click={reset}>
	reset
</button>