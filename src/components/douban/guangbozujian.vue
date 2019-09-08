<template>
    <div>
        <div class="contaniers">
            <div class="contanier">
                <div class="infor">
                    <img src="../../../static/image/下载.png">
                    <div class="talk">
                        <strong>豆瓣</strong>
                        <i>写了日记</i>
                        <p>2017-03-01 19:30:41</p>
                    </div>
                </div>
                <div class="card">
                    <p>豆瓣App 4.12.0 主要更新</p>
                    <div class="dary">
                        - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
                    </div>
                </div>
                <div class="details">
                    <div>
                        <span class="icons zan"><i>4</i></span>
                    </div>
                    <div>
                        <span class="icons ping"><i>0</i></span>
                    </div>
                    <div>
                        <span class="icons zhuan"><i>1</i></span>
                    </div>
                    <div>
                        <span class="icons more"><i></i></span>
                    </div>
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
    .contaniers{
        width: 100%;
        /* height: 2.3rem; */
        padding: .24rem 0rem;
        /* background: pink; */
    }

    .contanier{
        width: 3.3rem;
        height: 100%;
        /* background: blue; */
        margin: 0 auto;
        border-bottom: .01rem solid #e8e8e8;
    }

    .infor{
        width: 100%;
        height: .5rem;
        display: flex;
        margin-bottom: .15rem;
        /* background: red; */
    }

    .infor>img{
        width: .48rem;
        height: .48rem;
        border-radius: 50%;
        margin-right: .12rem;
    }

    .talk{
        width: 1.37rem;
        height: .38rem;
        margin-top: .12rem;
        font-size: .17rem;
        /* display: inline-block; */
    }
    
    .talk>i{
        font-style: normal;
        color: #aaa;
    }

    .talk>p{
        font-size: .14rem;
        white-space: nowrap;
         color: #aaa;
    }

    .card{
        width: 2.72rem;
        margin: .1rem .16rem .2rem;
        padding: .2rem;
        border-radius: .02rem;
        /* float: right; */
        border: .01rem solid #d8d8d8;
    }

    .card>p{
        font-size: .17rem;
        margin-bottom:.06rem;
    }

    .dary{
        width: 2.72rem;
        font-size: .12rem;
        line-height: .16rem;
        color: #aaa;
        overflow: hidden;
        /* text-overflow: ellipsis; */
    }

    .details{
        width: 3.3rem;
        height: .27rem;
        margin-left: .03rem;
        /* background: pink; */
        margin-bottom: .25rem;
    }

    .details>div{
        height: .24rem;
        line-height: .24rem;
        display: inline-block;
        margin-top: .03rem;
        margin-right: .2rem;
        /* position: relative; */
    }

    .icons{
        display: inline-block;
        width: .5rem;
        height: .24rem;
        /* background: blue; */
    }

    .zan{
        
        background-image: url(../../../static/image/1F1EE004-3EAF-4546-BD3B-B3469BDABD1F.png);
        background-size: 100% 100%;
    }

    .details i{
        font-size: .14rem;
        font-style: normal;
        margin-top: -.02rem;
        margin-left: .39rem;
        color: #aaa;
    }

    .ping{
        background-image: url(../../../static/image/2157D77D-0863-4065-A03D-FE7204C5C181.png);
        background-size: 100% 100%;
    }

    .zhuan{
        background-image: url(../../../static/image/092C6BE0-3213-4700-84B7-3DE04757144D.png);
        background-size: 100% 100%;
    }

    .details>div:nth-of-type(4){
        margin-right: 0rem;
    }

    .more{
        width: .2rem;
        height: .13rem;
        background-image: url(../../../static/image/more.png);
        background-size: 100% 100%;
        /* margin-bottom: .07rem; */
        position: relative;
        top: .06rem;
        margin-left: 1rem;
    }
</style>