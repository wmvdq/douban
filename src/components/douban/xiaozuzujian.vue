<template>
    <div>
        <div class="users">
            <div class="user_bar">
                <img src="../../../static/image/下载.jpg">
                <div class="login">
                    <router-link to="/login">请先登录</router-link>
                </div>
                <div class="icons">
                    <router-link to="/login">
                        <span class="icon pen"></span>
                    </router-link>

                    <router-link to="/login">
                        <span class="icon phone"></span>
                    </router-link>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
    .users{
        width: 100%;
        height: .51rem;
        padding: .12rem .21rem;
        /* background: pink; */
        border-bottom: .02rem solid #e8e8e8;
    }

    .user_bar{
        display: flex;
    }

    .user_bar img{
        width: .48rem;
        height: .48rem;
        border-radius: 50%;
    }
    
    .user_bar span{
        font-size: .15rem;
    }

    .login{
        width: .72rem;
        height: .48rem;
        font-size: .15rem;
        /* background: blue; */
        line-height: .48rem;
        margin-left: .1rem;
       
    }

    .login>a{
        color: #aaa
    }

    .icons{
        float: right;
        margin-top: .1rem;
        margin-left: .9rem;
    }

    .icon{
        display: inline-block;
        width: .55rem;
        height: .3rem;
        /* background: blue; */
        margin-right: 0rem;
        line-height: .28rem;
    }

    .pen{
        background-image: url(../../../static/image/38AC833A-3165-47FE-8B16-1199C2FF3BF7.png);
        background-size: 100% 100%;
    }
    
    .phone{
        background-image: url(../../../static/image/8ADB7AEC-D52C-4ADE-B684-18C0C071640F.png);
        background-size: 100% 100%;
    }
</style>