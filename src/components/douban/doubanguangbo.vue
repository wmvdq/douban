<template>
    <div>
        <div class="bgi">
            <div class="through">
                <span class="more">打开App, 浏览更多</span>
                <span class="down">极速下载</span>
                <span class="open">打开</span>
            </div>
        </div>
        <xiaozuzujian></xiaozuzujian>
        
        <guangbozujian></guangbozujian>
        <guangbozujian></guangbozujian>
        <guangbozujian></guangbozujian>
        <guangbozujian></guangbozujian>
        <guangbozujian></guangbozujian>
        <guangbozujian></guangbozujian>

        <div class="showmore">
            <router-link to="/guangbo">显示更多广播</router-link>
        </div>

        <doubanfooter></doubanfooter>
    </div>
</template>
<script>
import xiaozuzujian from './xiaozuzujian'
import guangbozujian from './guangbozujian'
import doubanfooter from './doubanfooter'
export default {
    components:{
        xiaozuzujian,
        guangbozujian,
        doubanfooter
    }
}

</script>
<style scoped>
    .bgi{
        width: 100%;
        height: .8rem;
        background-image: url(../../../static/image/promotion_bg.b7abee9.jpg);
        background-size: 100% 100%;
    }

    .through{
        width: 3.3rem;
        height:100%;
        /* background: pink; */
        margin-left: 0.45rem;
        line-height: .8rem;
    }

    .more{
        font-size: .14rem;
        color: #2ca532;
    }

    .down{
        display: inline-block;
        width:.87rem;
        height: .28rem;
        /* background: blue; */
        font-size: .14rem;
        line-height: .28rem;
        margin-left: .45rem;
        margin-top: .3rem;
        border-radius: .03rem;
        text-align: center;
        background-color: #2ca532;
        color: white;
        
    }

    .open{
        display: inline-block;
        width:.61rem;
        height: .28rem;
        /* background: red; */
        font-size: .14rem;
        line-height: .28rem;
        float: right;
        margin-top: .3rem;
        margin-right: .1rem;
        border-radius: .03rem;
        text-align: center;
        border: .01rem solid #42bd56;
        color: #42bd56;
    }

    
    
    .showmore{
        width: 100%;
        height: .57rem;
        text-align: center;
        line-height: .57rem;
        /* background: pink; */
    }

    .showmore>a{
        font-size: .16rem;
        color: #2ca532;
        /* background: blue; */
    }
</style>