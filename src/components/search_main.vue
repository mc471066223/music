<template>
    <div class="search-main">
        <h3 class="search-word">搜索“{{searchWords}}”</h3>
        <ul>
            <li v-for="(list , index) in searchList" :key="index" class="search-list" @click='searchHistory(list)'>
                <router-link :to="'/player/' + list.songid">
                    <i class="search-icon"></i>
                    <span class="search-word-name">{{list.title}}</span>
                </router-link>
                
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name : 'searchMain',
    data(){
        return{
            searchClose : true
        }
    },
    props:['searchWords'],
    computed:{
        ...mapState(['searchList'])
    },
    methods:{
        searchHistory(obj){
            this.$store.dispatch('searchHistoryList',obj).then(()=>{
                this.$emit('closeSearch',this.searchClose)
            })
            
        }

    }
}
</script>

<style scoped>
.search-word{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    height: 50px;
    margin-left: 10px;
    padding-right: 10px;
    font-size: 15px;
    line-height: 50px;
    color: #507daf;
    font-weight: 400;
    position: relative;
}
.search-word:after{
    position: absolute;
    z-index: 2;
    content: "";
    top: 0;
    left: 0;
    pointer-events: none;
    box-sizing: border-box;
    -webkit-transform-origin: top left;
    transform-origin: top left;
    border: 0 solid rgba(0,0,0,.1);
    width: 300%;
    height: 300%;
    -webkit-transform: scale(.333333);
    transform: scale(.333333);
    border-bottom-width: 1px;
    border-color: rgba(0,0,0,.1);
}
.search-list a{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 45px;
    padding-left: 10px;
    text-decoration: none
}
.search-icon{
    width: 15px;
    height: 15px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PGcgb3BhY2l0eT0iLjMiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzA0MDAwMCIgZD0iTTI4LjE4MSwyNy41MzVsLTEuNDE0LDEuNDE0bC03Ljc1NS03Ljc1NAoJCUMxNi45OTYsMjIuOTM4LDE0LjM3NSwyNCwxMS41LDI0QzUuMTQ5LDI0LDAsMTguODUyLDAsMTIuNUMwLDYuMTQ5LDUuMTQ5LDEsMTEuNSwxQzE3Ljg1MiwxLDIzLDYuMTQ5LDIzLDEyLjUKCQljMCwyLjc1Ni0wLjk3Myw1LjI4NS0yLjU4OSw3LjI2NkwyOC4xODEsMjcuNTM1eiBNMTEuNSwzQzYuMjUzLDMsMiw3LjI1MywyLDEyLjVjMCw1LjI0Niw0LjI1Myw5LjUsOS41LDkuNQoJCWM1LjI0NiwwLDkuNS00LjI1NCw5LjUtOS41QzIxLDcuMjUzLDE2Ljc0NiwzLDExLjUsM3oiLz48L2c+PC9zdmc+);
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-right: 7px;
}
.search-word-name{
    display: inline-block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 1%;
    padding-right: 10px;
    font-size: 15px;
    line-height: 45px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    position: relative;
}
.search-word-name:after{
    transform-origin: top left;
    border: 0 solid rgba(0,0,0,.1);
    position: absolute;
    z-index: 2;
    content: "";
    top: 0;
    left: 0;
    pointer-events: none;
    box-sizing: border-box;
    transform: scale(.5);
    width: 200%;
    height: 200%;
    border-color: rgba(0,0,0,.1);
    border-bottom-width: 1px;
}
</style>
