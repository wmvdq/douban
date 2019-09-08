<template>
    <div>
        <doubantitle></doubantitle>
        <tushuzujian  titlea="最受关注图书" leia="虚构类" titleb="最受关注图书" leib="非虚构类" titlec="豆瓣纸书" titled="发现好书" titlee="分类浏览"></tushuzujian>
        <doubanfooter></doubanfooter>
    </div>
</template>
<script>
import doubantitle from '../components/douban/doubantitle'
import tushuzujian from '../components/douban/tushuzujian'
import doubanfooter from '../components/douban/doubanfooter'
export default {
    components:{
        doubantitle,
        tushuzujian,
        doubanfooter
    },
    
} 
</script>

<style scoped>
    
</style>