<template>
    <div>
        <div class="proitem">
            <div class="middle">
                <img src="../../../static/image/book_zw.fc645eb.jpg">
                <div class="rightfont">
                    <h4>造物</h4>
                    <span>￥&nbsp;68</span>
                    <p>改变世界的万物图典，3000幅图里的发明与冒险</p>
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
    .proitem{
        width: 100%;
        height: 1.8rem;
        /* background: pink; */
    }

    .middle{
        width: 3.2rem;
        height: 1.4rem;
        /* background: blue; */
        margin: .2rem auto;
    }

    .middle>img{
        width: 1.2rem;
        height: 1.4rem;
        margin-right: .15rem;
        float: left;
    }

    .rightfont{
        float: left;
        width: 1.695rem
    }

    .rightfont>h4{
        font-size: .2rem;
        font-weight: normal;
        display: inline-block;
    }

    .rightfont>span{
        font-size: .16rem;
        margin-left: .9rem;
        color:#e76648;
    }

    .rightfont>p{
        margin-top: .15rem;
        font-size: .12rem;
        color: #9b9b9b;
    }
</style>