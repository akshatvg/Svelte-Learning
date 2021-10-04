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
</script>

<main>
    <button on:click={handleClick} style="width: 100px; height: 100px;">
        Click count {count}
    </button>
</main>
