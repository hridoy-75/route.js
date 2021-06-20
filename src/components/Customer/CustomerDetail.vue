<template>
<div>
<h2>Customer Detail{{$route.params.id}}</h2>

<router-link
 tag="button" 
 :to="{name:'customerEdit',params:{id: $route.params.id}, query:{locale:'en',q:100}}"
 class="btn btn-primary">
Edit user
</router-link>
</div>

    
</template>