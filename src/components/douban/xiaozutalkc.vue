<template>
    <div>
        <div class="ones">
            <div class="header">
                    <h4>买买买</h4>
            </div>
            <div class="one" v-for="(v,i) in arrc" :key="i">
                
                <div class="grounp">
                    <img :src="v.images.small">
                    <div class="meta">
                        <p>{{v.title}}</p>
                        <span>20005人</span>
                    </div>
                </div>
                <div class="lastline">
                    <span>{{v.group_topic.time}}</span>
                    <span>{{v.group_topic.title}}</span>
                </div>
            </div>
            <div class="bottom">
                <p>更多相关小组</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
    data(){
        return{
            arrc:[]
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/xiaozuc"
        }).then((data)=>{
            console.log(data.data.xiaozuc)
            this.arrc = data.data.xiaozuc
        })
    },
}
</script>
<style scoped>
    .ones{
        width: 100%;
        /* height: 4rem; */
        /* background:pink; */
        /* margin-top: .3rem; */
        padding-top: .1rem;
        margin-left: .16rem;
        padding-bottom: .2rem;
        
    }

    .one{
        /* width: 3.5rem; */
        height: 100%;
        /* background: blue; */
        border-bottom: .01rem solid #f2f2f2;
        margin-bottom: .2rem;
    }

    .header{
        margin-bottom: .15rem;
        margin-top: .2rem;
    }

    .header>h4{
        font-size: .168rem;
        font-weight: normal;
    }

    .grounp{
        display: flex;
        margin-bottom: .15rem;
    }

    .grounp>img{
        margin-right: .15rem;
    }

    .meta>p{
        width: 1.8rem;
        white-space: nowrap;
        overflow: hidden;
        font-size: .18rem;
        display: inline-block;
        text-overflow: ellipsis;
    }

    .meta span{
        font-size: .15rem;
        margin-left: .35rem;
        color: #ccc;
    }

    .lastline{
        width: 3.4rem;
        /* background: blue; */
        font-size: .15rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #ccc;
        margin-bottom: .2rem;
    }

    .bottom{
        text-align: center;
        color:#42bd56;
    }
    .bottom>p{
        font-size: .16rem;
    }
</style>