<svelte:options tag="bundle-file" />

<script>
	import { onMount } from "svelte";
	export var count = 0;

	function handleClick() {
		count += 1;
	}

	onMount(() => {
		console.log("Mounted");
	});

	$: if (count >= 5) {
		// alert(`count is dangerously high!${count}`,);
		// count = 9;
		console.log(customFunction);
		customFunction();
	}

	export let customFunction;
</script>

<main>
	<button on:click={handleClick} style="width: 100px; height: 100px;">
		Click count {count}
	</button>
</main>
