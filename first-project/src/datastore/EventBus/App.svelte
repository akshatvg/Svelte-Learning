<script>
    import Eventbus from 'svelte-eventbus';
    import Child from './Child.svelte';
 
    let totalclicks = 0;
</script> 
 
<p>Total clicks: {totalclicks}</p>
 
<Eventbus on:button_click={()=>totalclicks++}>
    <!-- There can be childs in any nest level-->
    <Child />
</Eventbus>