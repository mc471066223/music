<template>
    <div class="recommend">
        <h2 class="recommend-tit">推荐歌单</h2>
        <div class="recommend-list">
            <ul>
                <li v-for="(recommend , index) in recommendList" :key="index" class="recommend-list-li" @click='getSrc(recommend.thumb)'>
                    <router-link :to="'/detail/' + recommend.ch_name">
                        <div class="recommend-list-li-img">
                            <img :src="recommend.thumb" alt="">
                        </div>
                        <p class="recommend-list-li-txt">{{recommend.name}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
    name : 'recommend',
    data(){
        return{
            
        }
    },
    computed : {
        ...mapState(['recommendList'])
    },
    methods:{
        // getRecoList(){
        //     this.$store.dispatch('getRecommendList')
        // }
        getSrc(pic){
            this.$store.dispatch('getDetailImg' , pic)
        }
    },
    created : function(){
        this.$store.dispatch('getRecommendList')
    }
}
</script>

<style scoped>
.recommend-tit{
    position: relative;
    padding-left: 9px;
    margin: 14px 0;
    font-size: 17px;
    height: 20px;
    line-height: 20px;
    font-weight: 400
}
.recommend-tit:after{
    content: " ";
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -9px;
    width: 2px;
    height: 18px;
    background-color: #d33a31;
}
.recommend-list ul{
    padding-bottom: 16px;
}
.recommend-list ul::after{
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
    overflow: hidden;
    content: ".";
}
.recommend-list-li{
    display: block;
    float: left;
    width: 33.3%;
    padding-left: 1px;
    padding-right: 1px;
    box-sizing: border-box;
    padding-bottom: 16px;
}
.recommend-list-li a{
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.recommend-list-li:first-child{
    padding-left: 0;
    padding-right: 2px;
}
.recommend-list-li-img{
    position: relative;
    padding-bottom: 100%;
}
.recommend-list-li-img img{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1;
}
.recommend-list-li-txt{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 6px 2px 0 6px;
    line-height: 1.2;
    font-size: 13px;
}
</style>
