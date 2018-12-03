<template>
    <div class="search">
        <div class="search-input">
            <div class="search-input-main">
                <i class="search-input-main-search-icon"></i>
                <input type="text" placeholder="搜索歌曲、歌手、专辑" v-model="searchText" @input="searchSongorSinger(searchText)">
                <div class="search-input-main-clear" @click="endSearch">
                    <i :class="{'show':isShow}"></i>
                </div>
            </div>
        </div>
        <searchHistory v-if="isSearching && searchText == '' " @historyWords='historyWords'></searchHistory>
        <searchMain v-else :searchWords = 'searchText' @closeSearch='closeSearch'></searchMain>
    </div>
</template>

<script>
import searchHistory from '@/components/search_history'
import searchMain from '@/components/search_main'
export default {
    name : 'search',
    data(){
        return{
            isShow : false,
            isSearching : true,
            searchText : ''
        }
    },
    components:{
        searchHistory , searchMain
    },
    methods:{
        searchSongorSinger(search){
            this.isSearching = false;
            this.isShow = true;
            this.$store.dispatch('search' , search);
            if(this.searchText == ""){
                this.isSearching = true;
                this.isShow = false;
            }
        },
        endSearch(){
            this.isSearching = true;
            this.searchText = "";
            this.isShow = false;
        },
        closeSearch(close){
            console.log(close)
            this.isSearching = close
        },
        historyWords(word){
            this.searchText = word
        }
    }
}
</script>

<style scoped>
.search-input{
    padding: 15px 10px;
    position: relative;
}
.search-input:after{
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
.search-input-main{
    position: relative;
    width: 100%;
    height: 30px;
    padding: 0 30px;
    box-sizing: border-box;
    background: #ebecec;
    border-radius: 30px;
}
.search-input-main-search-icon{
    width: 13px;
    height: 13px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxLDIzLjUzNWwtMS40MTQsMS40MTRsLTcuMzE1LTcuMzE0CgkJQzE0LjcwOSwxOS4xMDcsMTIuNDYsMjAsMTAsMjBDNC40NzcsMjAsMCwxNS41MjMsMCwxMEMwLDQuNDc3LDQuNDc3LDAsMTAsMGM1LjUyMywwLDEwLDQuNDc3LDEwLDEwYzAsMi4zNDItMC44MTEsNC40OS0yLjE2LDYuMTk1CgkJTDI1LjE4MSwyMy41MzV6IE0xMCwyYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzQuNDE4LDAsOC0zLjU4Miw4LThTMTQuNDE4LDIsMTAsMnoiLz48L3N2Zz4=);
    display: inline-block;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 9px;
    margin: 0 8px;
    vertical-align: middle;
}
.search-input-main input{
    -webkit-appearance: none;
    border-radius: 0;
    border: 0;
    width: 100%;
    height: 30px;
    line-height: 18px;
    background: transparent;
    font-size: 14px;
    color: #333;
}
.search-input-main input:focus{
    outline: 0
}
input::-webkit-input-placeholder ,textarea::-webkit-input-placeholder{/* WebKit browsers*/color: #c9c9c9;}
input:-moz-placeholder ,textarea:-moz-placeholder{/* Mozilla Firefox 4 to 18*/color: #c9c9c9;}
input::-moz-placeholder ,textarea::-moz-placeholder{/* Mozilla Firefox 19+*/color: #c9c9c9;}
input:-ms-input-placeholder ,textarea:-ms-input-placeholder{/* Internet Explorer 10+*/color: #c9c9c9;}
.search-input-main-clear{
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    line-height: 28px;
    text-align: center;
}
.search-input-main-clear i{
    width: 14px;
    height: 14px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQsMGM3LjczMiwwLDE0LDYuMjY4LDE0LDE0YzAsNy43MzItNi4yNjgsMTQtMTQsMTQKCVMwLDIxLjczMiwwLDE0QzAsNi4yNjgsNi4yNjgsMCwxNCwweiIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ViZWNlYiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0ibTE5IDlsLTEwIDEwIi8+PHBhdGggZD0ibTkgOWwxMCAxMCIvPjwvZz48L2c+PC9zdmc+);
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
    display: none;
    vertical-align: middle;
}
.search-input-main-clear i.show{
    display: inline-block
}
</style>
