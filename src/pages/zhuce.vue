<template>
    <div>
        <h3>欢迎加入豆瓣</h3>
        <div class="login">
            <div class="topInput">
                <input type="text" placeholder="邮箱" v-model="uemail">
            </div>

            <div class="topInput" v-if="style" >
                <input type="password" placeholder="密码" v-model="upwd">
                <span class="bgp" @click="style=false"></span>
            </div>
            <div class="topInput" v-else>
                <input type="text" placeholder="密码" v-model="upwd">
                <span class="bgq" @click="style=true"></span>
            </div>

            <div class="topInput">
                <input type="text" placeholder="用户名" v-model="uname">
            </div>
            <input class="btn" type="button" value="立即注册"> 
            <!-- @click="fun()" -->
        </div>
        <div class="bigbox">
            <div class="smallbox">
                <p>点击「注册」代表你已阅读并同意用户使用协议</p>
                <span>下载豆瓣APP</span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            uemail:"",
            upwd:"",
            uname:"",
            style:true,
        }
    },
    methods:{
        // fun(){
        //     var param=new URLSearchParams();

        //     param.append("uemail",this.uemail);
        //     param.append("upwd",this.upwd);
        //     param.append("uname",this.uname);

        //     this.axios({
        //         method:"post",
        //         data: param,
        //         url:"http://localhost:3000/zhuce"
        //     }).then((ok)=>{
        //         console.log(ok);
        //     })
        // }
    }
}
</script>
<style scoped>
    h3{
        font-size:.4rem;
        font-weight: 100;
        color: green;
        margin: .3rem .6rem;
    }
    .login{
        margin-top: .15rem;
        margin-top: .5rem;
    }

    .topInput{
        width: 3.43rem;
        height: .48rem;
        margin-left: .12rem;
        position: relative;
    }
    
    .topInput input{
        width: 100%;
        height:100%;
        padding-left: 0.07rem;
        /* border-color: pink; */
    }


    .login .btn{
        width: 3.5rem;
        height: .48rem;
        margin-top: .1rem;
        border-radius: .06rem;
        background: green;
        outline: none;
        color:white;
        font-size: .15rem;
        margin-left: .12rem;
    }
    .bigbox{
        /* background: pink; */
        width: 100%;
        height: 1rem;
        margin-top: .2rem;
    }

    .bgp{
        display: inline-block;
        width:.27rem;
        height: .27rem;
        /* background: blue; */
        position: absolute;
        top: .1rem;
        right: .02rem;
        background-image: url(../../static/img/hide.png);
        background-size:100%
    }

    .bgq{
        display: inline-block;
        width:.27rem;
        height: .27rem;
        /* background: blue; */
        position: absolute;
        top: .1rem;
        right: .02rem;
        background-image: url(../../static/img/show.png);
        background-size:100%
    }

    .smallbox{
        width: 2.6rem;
        height: 1rem;
        margin: 0 auto;
        /* background: blue; */
        position: relative
    }

    .smallbox p{
        font-size: .12rem;
    }

    .smallbox span{
        font-size: .14rem;
        margin-left: .8rem;
        position: absolute;
        top:.6rem;
        color: green;
    }
</style>