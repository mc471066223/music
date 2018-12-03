<template>
    <div class="home-content">
        <HomeNav @oTabIndex = 'getTabIndex'></HomeNav>
        <Recommend v-show='oIndex == 0'></Recommend>
        <Hot v-show="oIndex == 1"></Hot>
        <Search v-show='oIndex == 2'></Search>
    </div> 
</template>

<script>
import HomeNav from '@/components/home_nav'
import Recommend from '@/components/recommend'
import Hot from '@/components/hot'
import Search from '@/components/search'
export default {
    name : 'content',
    data(){
        return{
            oIndex : 0
        }
    },
    components:{
        HomeNav , Recommend , Hot , Search
    },
    methods:{
        getTabIndex:function(data){
            this.oIndex = data;
        }
    }
}
</script>

<style scoped>

</style>
