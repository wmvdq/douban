<template>
    <div>
        <doubantitle></doubantitle>
        <div class="fours">
            <div class="four">
                <div class="topfour">
                    <div>
                        <span>影院热映</span>
                    </div>
                    <div>
                        <span>欧美新碟榜</span>
                    </div>
                </div>
                <div class="topfour">
                     <div>
                         <span><router-link to="/zhuce">注册账号</router-link></span>
                    </div>
                    <div>
                        <span><router-link to="/login">登陆豆瓣</router-link></span>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
        <div class="lists">
            <div class="list" v-for="(v,i) in arr" :key="i">
                <div>
                    <div class="leftdiv">
                        <h3>{{v.title}}</h3>
                        <p>{{v.address}}</p>
                    </div>
                    <div class="rightdiv">
                        <img :src="v.image">
                    </div>
                </div>
                <div class="last">
                    <h4>{{v.category_name}}</h4>
                    <p>{{v.tags}}</p>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import doubantitle from '../components/douban/doubantitle'
export default {
    
    data(){
        return{
            arr:[]
        }
    },
    created() {
        this.axios({
                method:"get",
                url:"/shouye"
            }).then((data)=>{
                // console.log(data.data.shouye);
                this.arr = data.data.shouye
            })
    },
    components:{
        doubantitle
    }
}
</script>
<style scoped>
    
    .fours{
        width: 100%;
        margin-top: .2rem;
    }
    .four{
        width: 3.3rem;
        margin: 0 auto;
    }
    .topfour{
        margin-bottom: .06rem;
    }
    .topfour a{
        text-decoration: none;
        color: rgb(73, 73, 73)
    }

    .topfour>div{
        font-size: .14rem;
        width: 1.59rem;
        height: .44rem;
        text-align: center;
        line-height: .4rem;
        background: rgb(246, 246, 246);
        margin-right:.06rem;
        display: inline-block;
    }

    .topfour>div:nth-of-type(1){
        float: left;
    }

    .lists{
        /* background: pink; */
        width: 100%;
        overflow: hidden;
    }

    .list{
        width: 3.5rem;
        float: right;
        
        border-bottom: .01rem solid rgb(227, 227, 227);
        margin-top: .3rem;
        position: relative;
    }

    .list>div{
        display: flex;
        justify-content: space-between
    }

    .leftdiv{
        width: 2.2rem;
    }

    .leftdiv>h3{
        font-size: .16rem;
        font-weight: 100;
        font-size: .15rem;
        margin-bottom: .15rem;
        line-height: 1.41;
    }

    .leftdiv>p{
        font-size: .1rem;
        color: rgb(170, 170, 170);
        line-height: 1.5;
    }

    .rightdiv{
        width: .94rem;
        height: 1.1rem;
        margin-right: .18rem;
        display: inline-block;
    }
    .rightdiv>img{
        width: 100%;
        height: 100%;
    }

    .last{
        font-size: .1rem;
        display: flex;
        justify-content: space-between;
        font-weight: normal;
        margin-top: .2rem;
        margin-bottom: .3rem;
        margin-right: .21rem;
        color: rgb(204, 204, 204)
    }
</style>