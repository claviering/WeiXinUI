<template>
    <div class="kkk">
        <img_text :img="img" :text="text"></img_text>
    </div>
</template>

<script>
    import img_text from './../commom/img_text.vue';
    import img from './moments.png';
    export default{
        data(){
            return{
                img:img,
                text:'Moment'
            }
        },
        components:{
            img_text:img_text
        }
        
    }
</script>

<style scope>
    .kkk{
        margin-top: 20px;
    }
</style>