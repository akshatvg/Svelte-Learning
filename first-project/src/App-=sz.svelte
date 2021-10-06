<svelte:options tag="bundle-file" />

<script>
	import Inner from './Inner.svelte';

	function handleMessage(event) {
		console.log(event);
	}
</script>

<Inner on:message={handleMessage}/>