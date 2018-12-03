<template>
    <div>
        <Top></Top>
        <HomeContent></HomeContent>
    </div>
    
</template>

<script>
import Top from '@/components/top'
import HomeContent from '@/components/home_content'
export default {
    name : 'Home',
    components:{
        Top,HomeContent
    }
}
</script>
