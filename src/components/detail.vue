<template>
    <div class="detail">
        <ul>
            <li class="detail-list" v-for="(list , index) in detailList" :key="index">
                <div class="detail-list-serial">{{index + 1}}</div>
                <div class="detail-list-name">
                    <div class="detail-list-name-main">
                        <div class="detail-list-name-main-songname">
                            {{list.title}}
                        </div>
                        <div class="detail-list-name-main-singer">
                            {{list.artist}}
                        </div>
                    </div>
                    <div class="detail-list-name-play">
                        <span></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name : 'datail',
    data(){
        return{
            getDetail:'http://api.apiopen.top/musicBroadcastingDetails?channelname=' + this.$route.params.id,
            getID : this.$route.params.id
        }
    },
    mounted:function(){
        console.log(this.getDetail)
        this.$store.dispatch('getDetailInformation',this.getDetail)
    },
    computed:{
        ...mapState(['detailList'])
    }
}
</script>

<style scoped>
.detail{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.detail-list{
    display: flex;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.detail-list:nth-child(11){
    display: none
}
.detail-list-serial{
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 40px;
    font-size: 17px;
    color: #999;
}
.detail-list-name{
    display: flex;
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}
.detail-list-name-main{
    padding: 6px 0;
    width: 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.detail-list-name-main::after{
    position: absolute;
    z-index: 2;
    content: "";
    top: 0;
    left: 0;
    pointer-events: none;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    -webkit-transform-origin: top left;
    transform-origin: top left;
    border: 0 solid rgba(0,0,0,.1);
    border-bottom-width: 1px;
    width: 300%;
    height: 300%;
    -webkit-transform: scale(.333333);
    transform: scale(.333333);
}
.detail-list-name-main-songname{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    font-size: 17px;
}
.detail-list-name-main-singer{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    font-size: 12px;
    color: #888;
}
.detail-list-name-play{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 10px;
}
.detail-list-name-play span{
    background-image: url(//s3.music.126.net/m/s/img/index_icon_3x.png?49a82fe…);
    background-size: 166px 97px;
    display: inline-block;
    width: 22px;
    height: 22px;
    background-position: -24px 0;
}
</style>
