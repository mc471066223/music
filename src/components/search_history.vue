<template>
    <div class="search-history">
        <ul>
            <li v-for="(search , index) in searchSave" :key="index" @click='searchAgain(search.name)'>
                <i class="search-history-icon"></i>
                <div class="search-history-name">
                    <span>{{search.name}}</span>
                    <figure class="search-history-name-close" @click.stop="deleteHitory(index)">
                        <i></i>
                    </figure>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'searchHistory',
    methods:{
        readHistory(){
            this.$store.dispatch('readSearchHistory');
        },
        deleteHitory(oIndex){
            this.$store.dispatch('deleteHistory' , oIndex)
        },
        searchAgain(words){
            this.$parent.searchSongorSinger(words);
            this.$emit('historyWords',words)
        }
    },
    mounted:function(){
        this.readHistory();
    },
    computed:{
        ...mapState(['searchSave'])
    }
}
</script>

<style scoped>
.search-history li{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 45px;
}
.search-history-icon{
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 10px;
    width: 15px;
    height: 15px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJtMTUgMzBjLTguMjg0IDAtMTUtNi43MTYtMTUtMTVzNi43MTYtMTUgMTUtMTUgMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOGMtNy4xOCAwLTEzIDUuODItMTMgMTNzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzLTUuODItMTMtMTMtMTNtNyAxNmgtOGMtLjU1MiAwLTEtLjQ0Ny0xLTF2LTEwYzAtLjU1My40NDgtMSAxLTFzMSAuNDQ3IDEgMXY5aDdjLjU1MyAwIDEgLjQ0NyAxIDFzLS40NDcgMS0xIDEiLz48L3N2Zz4=);

}
.search-history-name{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 45px;
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 1%;
}
.search-history-name span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 1%;
    margin-right: 10px;
}
.search-history-name span:after{
    position: absolute;
    z-index: 2;
    content: "";
    top: 0;
    left: 0;
    pointer-events: none;
    box-sizing: border-box;
    transform-origin: top left;
    border: 0 solid rgba(0,0,0,.1);
    border-bottom-width: 1px;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    border-color: rgba(0,0,0,.1);
}
.search-history-name-close{
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 32px;
    height: 32px;
    line-height: 32px;
}
.search-history-name-close i{
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 2px;
    width: 12px;
    height: 12px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJtMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdjLjM4MS4zODEuMzgxLjk5OCAwIDEuMzc5cy0uOTk4LjM4MS0xLjM3OCAwbC0xMC4zMzgtMTAuMzM4LTEwLjMzOCAxMC4zMzhjLS4zOC4zODEtLjk5Ny4zODEtMS4zNzggMHMtLjM4MS0uOTk4IDAtMS4zNzlsMTAuMzM4LTEwLjMzNy0xMC4zMzgtMTAuMzM4Yy0uMzgxLS4zOC0uMzgxLS45OTcgMC0xLjM3OHMuOTk4LS4zODEgMS4zNzggMGwxMC4zMzggMTAuMzM4IDEwLjMzOC0xMC4zMzhjLjM4LS4zODEuOTk3LS4zODEgMS4zNzggMHMuMzgxLjk5OCAwIDEuMzc4bC0xMC4zMzggMTAuMzM4Ii8+PC9zdmc+);

}
</style>
