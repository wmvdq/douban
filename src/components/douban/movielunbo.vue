<template>
    <div>
        <div class="centers">
            <div class="center">
                <div>
                    <div class="titles">
                        <p>{{titlea}}</p>
                        <span>更多</span>
                    </div>
                    <div class="allpictures">
                        <div class="pictures" v-for="(v,i) in obja" :key="i">
                            <img :src="v.images.large">
                            <h6>{{v.title}}</h6>
                            <el-rate
                                v-model="value"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                                </el-rate>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="titles">
                        <p>{{titleb}}</p>
                        <span>更多</span>
                    </div>
                    <div class="allpictures">
                        <div class="pictures" v-for="(v,i) in objb" :key="i">
                            <img :src="v.images.large">
                            <h6>{{v.title}}</h6>
                            <el-rate
                                v-model="value"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                                </el-rate>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="titles">
                        <p>{{titlec}}</p>
                        <span>更多</span>
                    </div>
                    <div class="allpictures">
                        <div class="pictures" v-for="(v,i) in objc" :key="i">
                            <img :src="v.images.large">
                            <h6>{{v.title}}</h6>
                            <el-rate
                                v-model="value"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                                </el-rate>
                        </div>
                    </div>
                </div>
                <div class="contents">
                    <div class="content">
                        <div class="titles">
                            <p>{{titled}}</p>
                            <span>更多</span>
                        </div>
                        <div class="middles">
                            <div class="middle">
                                <ul>
                                    <p v-if="!v.line" :style="{'color':v.color}" v-for="(v,i) in arrey" :key="i">{{v.title}}</p><br v-else>
                                </ul>
                            </div>
                        </div>
                        <div class="titles">
                            <p>{{titlee}}</p>
                            <span>更多</span>
                        </div>
                        <div class="fenleis">
                            <div class="fenlei">
                                <ul>
                                    <li>
                                        <router-link to="/jingdian">经典</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">冷门佳作</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">豆瓣高分</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">动作</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">喜剧</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">爱情</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">悬疑</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">恐怖</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">科幻</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">治愈</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">文艺</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">成长</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">动画</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">华语</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">欧美</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">韩语</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/jingdian">日本</router-link>
                                        <span></span>
                                    </li>
                                    <li>
                                        <router-link to="/"></router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj:[],
            arrey:[],
            value: 3.7
        }
    },
    props:{
        titlea:{
            type:String,
            required:true
        },
        titleb:{
            type:String,
            required:true
        },
        titlec:{
            type:String,
            required:true
        },
        titled:{
            type:String,
            required:true
        },
        titlee:{
            type:String,
            required:true
        },
    },
    created(){
        this.axios({
            method:"get",
            url:"/movie"
        }).then((data)=>{
            console.log(data.data.movie)
            this.obj = data.data.movie
        }),
        this.axios({
            method:"get",
            url:"/faxian"
        }).then((data)=>{
            // console.log(data.data.faxianhaodianying)
            this.arrey = data.data.faxianhaodianying
        })
    },
    computed: {
        obja(){
            var demoa = this.obj.filter((v,i)=>{
                if(i<10){
                     return this.obj[i]
                    }
            });
            return demoa
        },
        objb(){
            var demob = this.obj.filter((v,i)=>{
                if(i>10&&i<21){
                     return this.obj[i]
                    }
            });
            return demob
        },
        objc(){
            var democ = this.obj.filter((v,i)=>{
                if(i>21&&i<32){
                     return this.obj[i]
                    }
            });
            return democ
        },
    }
}
</script>
<style scoped>
    .centers{
        width: 100%;
        /* height: 5rem; */
        /* background: pink; */
    }
    .center{
        width: 3.5rem;
        /* height: 2.575rem; */
        /* background:chocolate; */
        margin: 0 auto;
        padding: .1rem 0rem 0rem 0rem;
    }
    .titles{
        overflow: hidden;
        margin-bottom: .1rem;
    }

    .titles p{
        font-size: .15rem;
        float: left;
    }
    .titles span{
        font-size: .13rem;
        float: right;
        margin-right: .2rem;
        color: rgb(66, 189, 86)
    }


    .allpictures{
        width: 100%;
        display: flex;
        /* flex-wrap: wrap; */
        overflow-x: auto;
        margin-bottom:.1rem;
    }
    .pictures{
        flex-shrink: 0;
        width: 1rem;
        margin-right: .05rem;
        /* display: inline-block; */
        
    }

    .pictures img{
        width: 100%;
        height: 1.3rem;
    }
    .pictures>h6{
        height: .3rem;
        font-size: .14rem;
        text-align: center;
        font-weight: normal;
        margin: .05rem 0rem;
        
    }

    .content{
        width: 100%;
    }

    .middle>ul{
       /* display: flex; */
        overflow: auto;
        margin-bottom: .1rem;
       /* width: 100%; */
       white-space: nowrap
    }

    .middle p{
        flex-shrink: 0;
        font-size: .15rem;
        border: .01rem solid rgb(255, 172, 45);
        padding: .2rem .2rem;
        margin-right: .2rem;
        border-radius: .05rem;
        display: inline-block;
        white-space: nowrap;
        margin-bottom: .1rem;
    }

    .fenleis{
        margin-top: .2rem;
    }

    .fenlei>ul{
        overflow: hidden;
    }

    .fenlei li{
        float: left;
        box-sizing: border-box;
        width: 50%;
        height:.5rem;
        line-height: .5rem;
        /* background:pink; */
        border-top: .01rem solid #eee;
        border-right: .01rem solid #eee;
    }
    
    .fenlei li>a{
        font-size: .16rem;
        color: rgb(66, 189, 86);
        margin-left: .1rem;
    }

    .fenlei li span{
        display: inline-block;
        float: right;
        width: .1rem;
        height: .1rem;
        color: #ccc;
        transform: rotate(-45deg);
        border-right: .01rem solid #ccc;
        border-bottom: .01rem solid #ccc;
        margin-top: .15rem;
        margin-right: .2rem;
        
        font-size: .16rem;
    }

    
</style>