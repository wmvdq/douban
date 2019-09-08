<template>
    <div>
        <doubantitle></doubantitle>
        <movielunbo  titlea="影院热映" titleb="在线免费观影" titlec="新片速递" titled="发现好电影" titlee="分类浏览"></movielunbo>
        <doubanfooter></doubanfooter>
    </div>
</template>
<script>
import doubantitle from '../components/douban/doubantitle'
import movielunbo from '../components/douban/movielunbo'
import doubanfooter from '../components/douban/doubanfooter'
export default {
    components:{
        doubantitle,
        movielunbo,
        doubanfooter
    }
} 
</script>

<style scoped>
    
</style>