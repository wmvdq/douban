<template>
    <div>
        <div class="topTitle">
            <span @click="cancel()">取消</span>
            <em>登陆豆瓣</em>
        </div>
        <div class="login">
            <div class="topInput">
                <input type="text" placeholder="邮箱" v-model='uemail'>
            </div>

            <div class="topInput" v-if="style" >
                <input type="password" placeholder="密码" v-model="upwd">
                <span class="bgp" @click="style=false"></span>
            </div>
            <div class="topInput" v-else>
                <input type="text" placeholder="密码" v-model="upwd">
                <span class="bgq" @click="style=true"></span>
            </div>

            <input class="btn" type="button" value="登录">
             <!-- @click="fun()" -->
        </div>
        <div class="btm">
            <div class="middleDiv">
                <div class="pwd">
                    <span>使用其他方式登录</span>
                    <span>找回密码</span>
                </div>
                <div class="zhuce">
                    <span>注册豆瓣账号</span>
                    <span>下载豆瓣APP</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            upwd:"",
            uemail:"",
            style:true
        }
    },
    methods:{
        cancel(){
            this.$router.go(-1);
        },
        // fun(){
        //     var param=new URLSearchParams();

        //     param.append("uemail",this.uemail);
        //     param.append("upwd",this.upwd);

        //     this.axios({
        //         method:"post",
        //         data: param,
        //         url:"http://localhost:3000/login"
        //     }).then((ok)=>{
        //         console.log(ok.data)
        //     })
        // }
    }
    
}
</script>
<style scoped>
    .topTitle{
        width: 100%;
        height:.45rem;
        font-size: 0;
        border-bottom: .01rem solid gainsboro;
        display: flex;
        align-items: center
    }
    .topTitle span{
        font-size: .13rem;
        color: green;
        letter-spacing: .02rem;
        margin-left: .2rem;
        
    }
    .topTitle em{
        font-style: normal;
        font-size: .16rem;
        margin-left: .88rem;
        font-weight: 600;
    }
    
    .login{
        margin-top: .3rem;
        margin-left: .01rem;
    }

    .login .btn{
        width: 3.5rem;
        height: .48rem;
        margin-top: .1rem;
        margin-left: .1rem;
        border-radius: .06rem;
        background: green;
        outline: none;
        color:white;
        font-size: .15rem;
    }

    .btm{
        width: 100%;
        height: 2rem;
        /* background: pink; */
        margin-top: .2rem;
    }
    .btm .middleDiv{
        width: 1.6rem;
        height: 1rem;
        /* background:turquoise; */
        margin:0 auto;
    }

    .pwd span{
        font-size: .1rem;
        color:rgb(189, 189, 189);
    }

    .pwd span:nth-of-type(1){
        margin-right: .1rem;
    }

    .zhuce{
        margin-top: .25rem;
    }

    .zhuce span{
        font-size: .1rem;
        color: green;
    }

    .zhuce span:nth-of-type(1){
        margin-right: .15rem;
        
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

</style>