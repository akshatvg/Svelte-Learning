<script>
    import Card from "./CardEvent.svelte";

    let user = {
        id: "#1212",
        name: "Jhon Doe",
        favor: false,
    };

    const whenFavored = (event) => (user.favor = event.detail.favor);
</script>

<Card {...user} on:favorite={whenFavored} />
