<svelte:options tag="bundle-file-add" />

<script>
	import { count } from './stores-old.js';

	function increment() {
count.update(n => n + 1);
	}
</script>

<button on:click={increment}>
	+
</button>