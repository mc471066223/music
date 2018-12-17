<template>
    <div class="home-nav">
        <nav class="nav-main">
            <li :class="{'active':isActive == index}" v-for="(nav , index) in navList" :key="index" @click='fnTab(index)'>
                <div class="nav-main-txt">
                    <span>{{nav.name}}</span>
                </div>
            </li>
        </nav>
    </div>
</template>

<script>
export default {
    name : 'nav',
    data(){
        return{
            navList:[{
                name : '推荐音乐1'
            },{
                name : '热歌榜'
            },{
                name : '搜索'
            }],
            isActive : 0
        }
    },
    methods:{
        fnTab:function(index){
            this.isActive = index;
            this.$emit('oTabIndex',this.isActive);
        }
    }
}
</script>

<style scoped>
.home-nav{
    height: 40px;
}
.nav-main{
    position: fixed;
    top: 64px;
    left: 0;
    z-index: 100;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #fff;
}
.nav-main li{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 33.3%;
    height: 100%;
    text-align: center;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.nav-main li.active .nav-main-txt{
    color: #d33a31;
}
.nav-main-txt{
    position: relative;
    display: inline-block;
    height: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    color: #333;
    font-size: 15px;
    line-height: 40px;
}
.nav-main-txt span{
    vertical-align: middle;
}
.nav-main li.active .nav-main-txt span:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    z-index: 3;
    width: 100%;
    height: 4px;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background: #d33a31;
}
</style>

