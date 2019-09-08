<template>
    <div>
        <p @click="fun()">&lt;</p>
    </div>
</template>
<script>
export default {
    methods:{
        fun(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    p{
        font-size:20px;
        cursor:pointer;
    }
</style>