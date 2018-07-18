<template>
    <div class="dis_box">
        <div class="dis_img">
            <img :src=moments>
        </div>
        <div class="dis_text">
            <span>Moments</span>
        </div>
        
    </div>
</template>

<script>
    import moments from './moments.png';
    export default{
        data(){
            return{
                moments:moments
            }
        }
        
    }
</script>

<style scope>
    .dis_box{
        width: 100%;
        height: 50px;
        background-color: rgb(255,255,255);
        margin-top: 5%;

    }
    .dis_img{
        float:left;
    }
    .dis_text{
        color: black;
        float:left;
        top: 50%;
        padding-top: 16px;
    }
</style>