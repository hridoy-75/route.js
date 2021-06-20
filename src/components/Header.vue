<template>
    <ul class="nav nav-pills bg-primary">
 
    <router-link active-class="active" exact style="cursor: pointer" tag="li" class="nav-item nav-link  text-white" to="/">Home
    </router-link>
    

    <router-link active-class="active" exact style="cursor: pointer" tag="li" class="nav-item nav-link  text-white" to="/customer" >Customer 
    </router-link>

    <router-link active-class="active" exact style="cursor: pointer" tag="li" class="nav-item nav-link  text-white" to="/about" >About</router-link>
</ul>
</template>
<script>
export default {
  
}
</script>

<style scoped>
ul .nav-item{
    color:azure

}
ul .active{
    color:red!important;
}

</style>
