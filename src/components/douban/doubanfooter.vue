<template>
    <div class="footers">
        <div class="footer">
            <div class="logo">
                <img src="../../../static/image/下载.png">
                <div class="imgright">
                    <h3>豆瓣</h3>
                    <p>我们的精神角落</p>
                </div>
            </div>
            <br>
            <router-link to="xiazai" class="clj">去 App Store 免费下载 iOS 客户端</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .footers{
        width: 100%;
        /* height: 2rem; */
        /* background: pink; */
        padding-top: .6rem;
        padding-bottom: .6rem;
    }

    .footer{
        width: 3.5rem;
        /* height: 1rem; */
        /* background: blue; */
        margin: 0 auto;
        text-align: center;
    }
    .logo{
        display:inline-block;
        overflow:hidden;
        margin-bottom: .2rem;
    }

    .logo>img{
        width:.57rem;
        height: .57rem;
        float:left;
    }

    .imgright{
        /* display: inline-block; */
        width: 1.3rem;
        height: .49rem;
        /* background: orange; */
        float: left;
    }
    .imgright>h3{
        font-size: .24rem;
        font-weight: normal;
        margin-left: -.6rem;
    }
    .imgright>p{
        font-size: .15rem;
    }
    
    .clj{
        color: rgb(66, 189, 86);
        font-size: .15rem;
    }
</style>