<template>
    <div>
        <div class="header">
            <h3>豆瓣</h3>
            <div class="right">
                <router-link to="/dianying">电影</router-link>
                <router-link to="/tushu">图书</router-link>
                <router-link to="/guangbo">广播</router-link>
                <router-link to="/xiaozu">小组</router-link>
                <router-link to="luyou">
                    <span></span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header{
        /* margin-top:.15rem; */
        height: .53rem;
        border-bottom: .01rem solid rgb(243, 243, 243);
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .header>h3{
        font-size: .25rem;
        color: rgb(5, 181, 18);
        float: left;
        margin-left: .15rem;
    }

    .right{
        display: flex;
        align-items: center;
    }

    .right a{
        font-size:.14rem;
        text-decoration: none;
        margin-right: .15rem;
    }

    .right a:nth-of-type(1){
        color: rgb(35, 132, 132)
    }

    .right a:nth-of-type(2){
        color: rgb(159, 120, 96)
    }
    .right a:nth-of-type(3){
        color: rgb(228, 168, 19)
    }
    .right a:nth-of-type(4){
        color: rgb( 42, 184, 402)
    }

    .right a:nth-of-type(5)>span{
        display: inline-block;
        width:.25rem;
        height:.2rem;
        background-image: url(../../../static/image/未标题-2.jpg);
        background-size: 100% 100%;
        margin-top: .1rem;
    }
    .right img{
        width:100%;
        height:100%;
    }
</style>