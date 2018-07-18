<template>
    <div class="dis_box">
        <div class="dis_img">
            <img :src=img>
        </div>
        <div class="dis_text">
            <span>{{text}}</span>
        </div>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
            }
        },
        props:[
            'img','text'
        ]
        
    }
</script>

<style scope>
    .dis_box{
        width: 100%;
        height: 50px;
        background-color: rgb(255,255,255);
        display: flex;
        align-items: center;

    }
    .dis_img{
    }
    .dis_text{
        color: black;
        padding-left: 3%;
    }
</style>