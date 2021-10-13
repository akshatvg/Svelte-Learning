<!-- Contexts don't get updated. -->

<script>
	import {getContext} from 'svelte';
  
	//Get the Ancestor user object
        const user = getContext('user');
  
	let hearts = ['♡','♥'];	
	let heartIcon = hearts[0];
  
	//Apply the favor value to reactive heartIcon
        $: heartIcon = user.favor ? hearts[1] : hearts[0];	
</script>

<div class="card">
	<i>{user.id}</i>
	<h2>{user.name}</h2>
	<span class="btnHeart">{heartIcon}</span>
</div>

<style>
	.card{	position:relative; margin:50px auto; width:300px; padding:20px; border-radius:9px;background-color:#F5F7F0;}
	i{ color:#999;}
	h2{margin:0; color:#491D3C;}
	.btnHeart{ position:absolute; right:20px; top:10px; font-size:32px; cursor:pointer; }
</style>