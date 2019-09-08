<template>
    <div>
        <router-link to="/dianying">电影</router-link>
        <router-link to="/jiudian">酒店</router-link>
        <router-link to="/meishi">美食</router-link>
        <router-link to="/waimai">外卖</router-link>
        <router-link to="/yule">娱乐</router-link>
    </div>
</template>

<script>

export default {
    
}
</script>
<style scoped>
    div{
        display:flex;
        background:pink;
        width:100%;
    }
    div>a{
        flex:1;
    }
</style>