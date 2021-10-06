<svelte:options tag="bundle-file-dec" />

<script>
	import { count } from './stores-old.js';

	function decrement() {
		count.update(n => n - 1);
	}
</script>

<button on:click={decrement}>
	-
</button>