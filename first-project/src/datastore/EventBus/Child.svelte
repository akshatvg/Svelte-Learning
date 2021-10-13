<script>
    import {createEventbusDispatcher} from 'svelte-eventbus';
    const dispatch = createEventbusDispatcher();
</script> 
 
<button on:click={()=>dispatch('button_click')}>Click</button>